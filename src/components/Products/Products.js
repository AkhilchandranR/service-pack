import React from 'react';
import ProductCard from '../ProductCards/ProductCard';
import './Products.css';
import speech from '../../images/speech.svg';
import text from '../../images/text.svg';
import voice from '../../images/voice.svg';
import Slide from 'react-reveal/Slide';

function Products({buttoncolor,heading}) {
    return (
        <div className="container">
            <div className="products">
                <Slide bottom>
                    <h1>{heading}</h1>
                </Slide>
                <div className="product__cards">
                        <ProductCard picture={speech} heading="Speech Analytics" content="Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book." buttoncolor={buttoncolor}/>
                        <ProductCard picture={text} heading="Text Analytics" content="Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book." buttoncolor={buttoncolor}/>
                        <ProductCard picture={voice} heading="Voice Assistants" content="Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book." buttoncolor={buttoncolor}/>
                </div>
            </div>
        </div>
    )
}

export default Products
