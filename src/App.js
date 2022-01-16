import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage';
import QualityWorks from './pages/QualityWorks/QualityWorks';
import Smartbot from './pages/Smartbot/Smartbot';
import VoiceDesk from './pages/VoiceDesk/VoiceDesk';
import Textlens from './pages/Textlens/Textlens';
import Platform from './pages/Platform/Platform';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/platform" element={<Platform/>}/>
        <Route path="/textlens" element={<Textlens/>}/>
        <Route path="/voicedesk" element={<VoiceDesk/>}/>
        <Route path="/smartbot" element={<Smartbot/>}/>
        <Route path="/qualityworks" element={<QualityWorks/>}/>
        <Route path="/" element={ <HomePage/> }/>
      </Routes>
    </div>
  );
}

export default App;
