import {React, useState } from 'react';

import './App.css';
import { handleDropDownNavMenu } from './utils'

import { Header } from './components/Header';
import { HeaderMob } from './components/HeaderMob';
import { Homepage } from './components/Homepage';
import { Footer } from './components/Footer';

import { Route, Switch } from 'react-router-dom';
import { CollectionsPage } from './components/CollectionsPage';
import { ProductPage } from './components/ProductPage';
import { Basket } from './components/Basket';
import { CheckoutPage } from './components/CheckoutPage';
import { ChatWidget } from './components/ChatWidget';

export const App = () => {
  const [basket, setBasket] = useState([]);
  const [showBasket, setshowBasket] = useState(false);
  const [itemCount, setItemCount] = useState(0);

    const handleBasketVisibility = () => {
        const basket = document.querySelector( ".basket-container" );
        const overlay = document.querySelector( ".overlay" );
        if( showBasket )
        {
            setshowBasket( false )
            overlay.style.display = "none";
            basket.style.right = "-520px";
            document.querySelector( "body" ).classList.remove( "disable-scroll" );
        }
        else
        {
            setshowBasket( true )
            overlay.style.display = "block";
            basket.style.right = "0";
            document.querySelector( "body" ).classList.add( "disable-scroll" );
        }
    }

  // let newBasket = [];

  const addToBasket = (shoe) => {
    basket.push(shoe);
    setBasket( basket );
    let lSBasket = JSON.parse(localStorage.getItem('basket'))
    if( lSBasket )
    {
      lSBasket.push(shoe);
      localStorage.setItem('basket', JSON.stringify(lSBasket));
    }
    else
    {
      localStorage.setItem('basket', JSON.stringify(basket));
    }
    setItemCount( itemCount + 1 )
  }

  return (
    <div className="App">
      <Header handleBasketVisibility={handleBasketVisibility} itemCount={itemCount}/>
      <HeaderMob handleBasketVisibility={handleBasketVisibility} itemCount={itemCount}/>
      <Basket handleBasketVisibility={handleBasketVisibility} basket={basket}/>
      <Switch>
        {/* <Homepage /> */}
        <Route path="/" component={Homepage} exact />
        <Route path="/collections/:collection" component={CollectionsPage} />
        {/* <Route path="/:collection/:type" component={CollectionsPage} exact /> */}
        {/* <Route path="/products/:productName" component={ProductPage} exact addToBasket={addToBasket} /> */}
        <Route path="/products/:productName" render={(props) => <ProductPage {...props} addToBasket={addToBasket} />}/>
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default App;
