import {React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import {handleSuccessModal} from '../utils/index'

import { getSingleShoe } from '../api';

import shoeImage from '../images/shoe.jpg'
import fitFinderImage from '../images/fit_finder.PNG'
import klarnaImage from '../images/klarna.PNG'

import { SuccessModal } from './SuccessModal';
import { MightAlsoLike } from './MightAlsoLike';
import { ProductInfo } from './ProductInfo';

export const ProductPage = ({addToBasket}) => {
    const [shoe, setShoe] = useState(null);
    const [sizes, setSizes] = useState([]);
    const [size, setSize] = useState(0);
    const [sizeError, setSizeError] = useState("")
    const location = useLocation();
    const shoeName = location.pathname.split('/')[2];

    useEffect(() => {
        console.log('useEffect')
        const shoe = getSingleShoe( shoeName )
        setShoe( shoe )
        setSizes( shoe.sizes )
    }, [shoeName])

    
    const getSize = (e) => {
        const size = e.target.value;
        console.log(size, 'size log');
        setSize( size );
        setSizeError("");
    }

    const handleAddToBasket = () => {
        if( size )
        {
            let newShoe = { ...shoe }
            newShoe.size = size;
            console.log(newShoe, 'newShoe')
            addToBasket( newShoe );
            handleSuccessModal();
        }
        else
        {
            console.log('Please select a size')
            setSizeError("Please select a size")

        }
    }
    console.log(shoe, 'the shoe')
    if( shoe )
    {
        return (
            <div className="page-container">
                <SuccessModal />
                <div className="top-half">
                    <div className="image-container">
                    <img src={shoeImage} alt={shoe.name}/>
                    </div>
                    <div className="text-container">
                        <div className="header">{shoe.name}</div>
                        <div className="price">£{shoe.price.toFixed(2)}</div>
                        <div className="icons-container">
                            <AiFillStar className="icon"/>
                            <AiFillStar className="icon"/>
                            <AiFillStar className="icon"/>
                            <AiFillStar className="icon"/>
                            <AiFillStar className="icon"/>
                            <p>Out of 38 reviews</p>
                        </div>
                        <div className="fit-finder"><img src={fitFinderImage} alt="" /></div>
                        <div className="size-container">
                            <select name="" id="" onChange={getSize}>
                                <option value="" selected disabled>Select a Size</option>
                                {sizes && sizes.map( (size, i) => {
                                    return(
                                        <option value={size} key={i}>{size}</option>
                                    )
                                })}
                            </select>
                            {sizeError && <div className="size-error">Please select a size</div>}
                        </div>
                        <div></div>
                        <div className="cta-container">
                            <div className="button" onClick={handleAddToBasket}>Add to Basket</div>
                            <div className="button">Collect in Store</div>
                        </div>
                        <div className="klarna">
                            <img src={klarnaImage} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bottom-half">
                    <MightAlsoLike />
                    <ProductInfo description={shoe.description}/>
                </div>
            </div>
        )
    }
    else
    {
        return "";
    }
}
