import React, { useEffect, useState} from 'react';
import axios from 'axios';

import './CSS/Home.css';
import CryptoItem from './CryptoItem';
import Spinner from './Spinner';

export default function Home(props) {

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '10',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': 'ee882d7f7fmshfc971f69be664a3p15ba06jsn3a73f063f87c',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  const [data,setData]= useState([]);
  const [loading,setLoading]= useState(true);

  useEffect(() =>{
    document.title="cryptoX";
    axios.request(options)
    .then((response)=>{
      console.log(response.data.data);
      setData(response.data.data);
      setLoading(false);                                                 
    })
  }, [])

  return (
  <>
    <div style={{height:'71px'}}></div>          {/* This is to leave some area for the fixed navigation bar*/}
    {               /*Next line ensures that no useless data is displayed when data is being fetched by the API*/
    (!loading) && <div className="container-sm">

      <h2>Global Crypto Stats</h2>
      <div className="row">
        <div className="col-md-3 mx-2 my-2">
          <p className="title-CryptoStats">Total Cryptocurrencies</p>
          <p className="number-CryptoStats">{data?.stats?.totalCoins}</p>
        </div>
        <div className="col-md-3 mx-2  my-2"> <p className="title-CryptoStats">Total Market Cap</p><p className="number-CryptoStats">$ {Math.round((data?.stats?.totalMarketCap)/10000000000)/100} T</p></div>
        <div className="col-md-3 mx-2  my-2"> <p className="title-CryptoStats">Total Markets</p><p className="number-CryptoStats">{data?.stats?.totalMarkets}</p></div>
        <div className="col-md-3 mx-2  my-2"> <p className="title-CryptoStats">Total Exchanges</p><p className="number-CryptoStats">{data?.stats?.totalExchanges}</p></div>
        <div className="col-md-3 mx-2  my-2"> <p className="title-CryptoStats">Total 24th Volume</p><p className="number-CryptoStats">{data?.stats?.total24hVolume}</p></div>
      </div>

      <h2>Top 10 Global Crypto Currencies</h2>
      <div className="d-flex flex-wrap justify-content-center">
      {
        (data?.coins).map((value) => {
          return <div className="d-flex justify-content-center"  key={value.name}>
            <CryptoItem mode={props.mode} uuid={value.uuid} rank={value.rank} name={value.name} iconUrl={value.iconUrl} price={value.price} marketCap={value.marketCap} dailyChange={value.change}/>
          </div>   
        })
      }
      </div> 
    </div>}
    {
      loading && <Spinner mode={props.mode}/>
    }
  </>
  )
}