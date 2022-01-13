import React from 'react';
import ProductCard from '../ProductCards/ProductCard';
import './Products.css';
import speech from '../../images/speech.svg';
import text from '../../images/text.svg';
import voice from '../../images/voice.svg';

function Products() {
    return (
        <div className="container">
            <div className="products">
                <h1>How AI enhances Customer Experience</h1>
                <div className="product__cards">
                        <ProductCard picture={speech} heading="Speech Analytics" content="Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book."/>
                        <ProductCard picture={text} heading="Text Analytics" content="Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book."/>
                    
                        <ProductCard picture={voice} heading="Voice Assistants" content="Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book."/>
                        <ProductCard picture={voice} heading="Voice Assistants" content="Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book."/>
                </div>
            </div>
        </div>
    )
}

export default Products
