import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Graph from './Graph'
import Spinner from './Spinner'

import './CSS/CryptoDetails.css';

export default function CryptoDetails(props) {

  const { coinID }= useParams();
  const [data,setData]= useState([]);
  const [loading,setLoading]= useState(true);

  const options = {
    method: 'GET',
    url: `https://coinranking1.p.rapidapi.com/coin/${coinID}`,
    params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
    headers: {
      'X-RapidAPI-Key': 'd82da8df05mshfae8884b0e16928p16edf0jsnf10fac003be5',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };


  useEffect(()=>{
    document.title=`cryptoX- Crypto Details`;
    axios.request(options)
    .then((response)=>{
      setData(response.data?.data?.coin);
      setLoading(false);                                                 
    })
  },[])

  return (
  <>
  
  <div style={{ height: "71px" }}></div>        {/* This is to leave some area for the fixed navigation bar*/}
  {
    loading && <Spinner mode={props.mode}/>
  }

  {       //This is to display the page when loading is finished and not taking place anymore
    (!loading) && <div className="container">
      <div className="title d-flex justify-content-center align-items-center">
        <img src={data.iconUrl} alt="icon" className="cryptoIcon"/>
        <h2>{data.name} ({data.symbol})</h2>
        <div className="changePercentage" style={{color:data.change>0?'#1ba21b':'#de473f'}}>
          {data.change}%
          {
            (data.change>0) && <span className="material-symbols-outlined mx-2">keyboard_double_arrow_up</span>
          }
          {
            (data.change<0) && <span className="material-symbols-outlined mx-2"> keyboard_double_arrow_down </span>
          }
        </div> 
      </div>

      {/* <Graph mode={props.mode} uuid={data.uuid} timePeriod={24}/>*/}
      
      <h3>{data.name} Value Statistics:</h3>
      <div className="details d-flex flex-column flex-sm-row flex-sm-wrap justify-content-around">
        <div className="stats-item col-sm-5 col-xs-9">
          <div className="stats-title">Price:</div>
          <div className="stats-data">$ {data.price}</div>
        </div>
        <div className="stats-item col-sm-5"> <div className="stats-title">Rank:</div> <div className="stats-data">{data.rank}</div> </div>
        <div className="stats-item col-sm-5"> <div className="stats-title">{data?.symbol} Exchanges:</div> <div className="stats-data">{data?.numberOfExchanges}</div> </div>
        <div className="stats-item col-sm-5"> <div className="stats-title">{data?.symbol} Markets:</div> <div className="stats-data">{data.numberOfMarkets}</div> </div>
        <div className="stats-item col-sm-5"> <div className="stats-title">Circulating:</div> <div className="stats-data">{data?.supply?.circulating}</div> </div>
        <div className="stats-item col-sm-5"> <div className="stats-title">Supply:</div> <div className="stats-data">{data?.supply?.total}</div> </div>
        <div className="stats-item col-sm-5"> <div className="stats-title">All Time High::</div> <div className="stats-data">$ {data?.allTimeHigh?.price}</div> </div>
        <div className="stats-item col-sm-5"> <div className="stats-title">BTC Price:</div> <div className="stats-data">{data?.btcPrice}</div> </div>
      </div>

      <div className="description">{data.description}</div>
      
      <h3>Website Links</h3>
      <div className="websites d-flex flex-column flex-sm-row flex-sm-wrap justify-content-around">
        {
          (data?.links).map((a)=>(
            <div className="websites-item col-sm-2 col-md-3 col-lg-4" key={a.name}>
              <div>{a.type}: </div>
              <a href={a.url} className="website-link" target="_blank" style={{color:props.mode==='light'?'rgb(6 6 124 / 98%)':'whitesmoke'}}>{a.name}</a>
            </div>
          ))
        }       
      </div>
    </div>
  }
  </>
  );
}