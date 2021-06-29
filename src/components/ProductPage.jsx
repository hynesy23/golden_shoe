import {React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import '../styles/product.css'

import { GrFacebook } from 'react-icons/gr'
import { ImWhatsapp } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'

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
    const [sizeError, setSizeError] = useState("");
    const location = useLocation();
    const shoeId = location.pathname.split('/')[2];

    useEffect(() => {
        const fetchSingleShoe = async() => {
            const shoe = await getSingleShoe( shoeId )
            setShoe( shoe )
            setSizes( shoe.sizes )
        }
        fetchSingleShoe();
    }, [shoeId])

    
    const getSize = (e) => {
        const size = e.target.value;
        setSize( size );
        setSizeError("");
    }

    const handleAddToBasket = () => {
        if( size )
        {
            let newShoe = { ...shoe }
            newShoe.size = size;
            addToBasket( newShoe );
            handleSuccessModal();
        }
        else
        {
            setSizeError("Please select a size")

        }
    }
    
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
                        <div className="price">£{shoe.price}</div>
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
                            {/* <div className="button">Collect in Store</div> */}
                        </div>
                        <div className="klarna">
                            <img src={klarnaImage} alt="" />
                        </div>
                        <div className="social-icons">
                            <div><GrFacebook /></div>
                            <div><ImWhatsapp /></div>
                            <div><SiInstagram /></div>
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
