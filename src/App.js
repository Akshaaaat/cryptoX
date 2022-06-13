import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CryptoCurrency from'./components/CryptoCurrency';
import CryptoDetails from'./components/CryptoDetails';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App(){

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#2c3034";
      document.body.style.color = "whitesmoke";
    } 
    else {
      setMode('light')
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  
  {
    if (mode==='light') 
    document.body.style.backgroundColor='whitesmoke';
  }

  return (
    <Router>

      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>

        <Route exact path="/" element={
          <Home mode={mode} key="home"/>
        } />
        <Route exact path="/cryptocurrency" element={
          <CryptoCurrency mode={mode} key="crypto"/>
        } />
        <Route path="/crypto">
          <Route path=":coinID" element={
            <CryptoDetails mode={mode} key="details"/>
          } />
        </Route>

      </Routes>
    </Router>
  );
}