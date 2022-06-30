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

  const [mode, setMode] = useState('light');      //Toggle Mode functions
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = "#2c3034";
      document.body.style.color = "whitesmoke";
    } 
    else {
      setMode('light')
      document.body.style.backgroundColor = "whitesmoke";
      document.body.style.color = "black";
    }
  }; 
  {
    //We set the default background color to whitesmoke
    if (mode==='light') 
    document.body.style.backgroundColor='whitesmoke';
  }

  const [search,setSearch]= useState("");       //Search Functions

  return (
    <Router>

      <Navbar mode={mode} search={search} setSearch={setSearch} toggleMode={toggleMode} />
      <Routes>

        <Route exact path="/" element={
          <Home mode={mode} key="home"/>
        } />
        <Route exact path="/cryptocurrency" element={
          <CryptoCurrency mode={mode} key="crypto" type="crypto"/>
        } />
        <Route exact path="/search">
          <Route exact path=":searchTerm" element={
            <CryptoCurrency mode={mode} key={search} type="search" search={search}/>
          } />
        </Route>
        <Route path="/crypto">
          <Route path=":coinID" element={
            <CryptoDetails mode={mode} key="details"/>
          } />
        </Route>

      </Routes>
    </Router>
  );
}