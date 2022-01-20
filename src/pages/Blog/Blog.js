import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Products from '../../components/Products/Products';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import design from '../../images/design.png';
import './Blog.css';

function Blog() {
    return (
        <div className='blog'>
            <div className='blog__breadCrumbs'>
                <BreadCrumbs links={[{name:"Home"},{name:"Blog"}]}/>
            </div>
            
            <img src={design} alt='' className='blog__fill d_one'/>
            <img src={design} alt='' className='blog__fill d_two'/>
            <img src={design} alt='' className='blog__fill d_three'/>

            <div className='blog__dots yellow bl_one'></div>
            <div className='blog__dots yellow bl_two'></div>
            <div className='blog__dots yellow bl_three'></div>
            <div className='blog__dots yellow bl_four'></div>
            <div className='blog__dots yellow bl_five'></div>
            <div className='blog__dots yellow bl_six'></div>
            <div className='blog__dots yellow bl_seven'></div>
            <div className='blog__dots yellow bl_eight'></div>
            <div className='blog__dots yellow bl_nine'></div>
            <div className='blog__dots yellow bl_ten'></div>
            <div className='blog__dots yellow bl_eleven'></div>
            <div className='blog__dots green bl_twelve'></div>
            <div className='blog__dots green bl_thirteen'></div>

            <div className='blog__dots yellow bl_fourteen'></div>
            <div className='blog__dots yellow bl_fifteen'></div>
            <div className='blog__dots yellow bl_sixteen'></div>
            <div className='blog__dots yellow bl_seventeen'></div>
            <div className='blog__dots yellow bl_eighteen'></div>
            <div className='blog__dots yellow bl_nineteen'></div>
            <div className='blog__dots yellow bl_twenty'></div>
            <div className='blog__dots green bl_twentyone'></div>
            <div className='blog__dots green bl_twentytwo'></div>
            <div className='blog__dots green bl_twentythree'></div>

            <Navbar/>


            <h1 className='blog__heading'>Blog</h1>

            <div className='blog__row'>
                <Products buttoncolor="#000000"/>
            </div>

            <div className='blog__row2'>
                <Products buttoncolor="#000000"/>
            </div>

            <Footer/>
        </div>
    )
}

export default Blog
