import React from 'react';
import './ProductCard.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function ProductCard({picture,heading,content,buttoncolor}) {
    return (
        <div className="productCard">
            <img src={picture} alt={heading}/>
            <h2 className="productCard__heading">{heading}</h2>
            <p className="productCard__description">
                {content}
            </p>
            <button style={{backgroundColor:buttoncolor}}>
                <ArrowForwardIcon/>
            </button>
        </div>
    )
}

export default ProductCard
