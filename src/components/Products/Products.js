import { Container } from '@mui/material';
import React from 'react';
import ProductCard from '../ProductCards/ProductCard';
import './Products.css';
import speech from '../../images/speech.png';
import text from '../../images/text.png';
import voice from '../../images/voice.png';

function Products() {
    return (
        <Container>
            <div className="products">
                <h1>How AI enhances Customer Experience</h1>
                <div className="product__cards">
                    <div className="product___cardSections">
                        <ProductCard picture={speech} heading="Speech Analytics" content="Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book."/>
                        <ProductCard picture={text} heading="Text Analytics" content="Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book."/>
                    </div>
                    <div className="product___cardSections">
                        <ProductCard picture={voice} heading="Voice Assistants" content="Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book."/>
                        <ProductCard picture={voice} heading="Voice Assistants" content="Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book."/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Products
