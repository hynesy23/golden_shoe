import './App.css';
import { handleDropDownNavMenu } from './utils'

import { Header } from './components/Header';
import { Homepage } from './components/Homepage';
import { Footer } from './components/Footer';

import { Route, Switch } from 'react-router-dom';
import { CollectionsPage } from './components/CollectionsPage';
import { ProductPage } from './components/ProductPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* <Homepage /> */}
        <Route path="/" component={Homepage} exact />
        <Route path="/:collection" component={CollectionsPage} exact />
        <Route path="/collections/:product-name" component={ProductPage} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
