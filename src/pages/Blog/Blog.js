import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Products/Products';
import './Blog.css';

function Blog() {
    return (
        <div className='blog'>
            <Navbar/>
            <h1 className='blog__heading'>Blog</h1>
            <div className='blog__row'>
                <Products buttoncolor="#000000"/>
            </div>
            <div className='blog__row'>
                <Products buttoncolor="#000000"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog
