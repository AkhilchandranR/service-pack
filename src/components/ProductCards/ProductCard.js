import React from 'react';
import './ProductCard.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function ProductCard({picture,heading,content}) {
    return (
        <div className="productCard">
            <img src={picture} alt={heading}/>
            <h2 className="productCard__heading">{heading}</h2>
            <p className="productCard__description">
                {content}
            </p>
            <button>
                <ArrowForwardIcon/>
            </button>
        </div>
    )
}

export default ProductCard
