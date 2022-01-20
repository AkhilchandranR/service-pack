import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import './KnowledgeBase.css';
import Footer from '../../components/Footer/Footer';
import QuestionsTab from '../../components/QuestionsTab/QuestionsTab';

function KnowledgeBase() {
  return (
    <div className='knowledgeBase'>
        <Navbar/>
        <BreadCrumbs 
        links={[{name:"Service Pack"},{name:"Knowledge Base"}]}/>

        <div className='knowledge__body'>
            <h1>Knowledge Base</h1>
            <div className='knowledge__topics'>
              <QuestionsTab/>
              <QuestionsTab/>
              <QuestionsTab/>
              <QuestionsTab/>
              <QuestionsTab/>
            </div>
        </div>

        <Footer/>
    </div>
  );
}

export default KnowledgeBase;
