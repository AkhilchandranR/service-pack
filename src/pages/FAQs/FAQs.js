import React from 'react';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import QuestionsTab from '../../components/QuestionsTab/QuestionsTab';
import './FAQs.css';

function FAQs() {
  return(
      <div className='faqs'>
          <Navbar/>

          <BreadCrumbs 
          links={[{name:"Service Pack"},{name:"Frequently Asked Questions"}]}/>

          <div className='faqs__body'>
              <h1>Frequently Asked Questions</h1>
              <div className='faqs__questionsTab'>
                  <QuestionsTab/>
              </div>
          </div>

          <Footer/>
      </div>
  )
}

export default FAQs;
