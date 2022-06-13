import React, { useEffect, useState} from 'react'
import CryptoItem from './CryptoItem'
import Spinner from './Spinner'
import axios from 'axios';

const Search = (props) => {   /* Delete this file if you can get the search done in the cryptocurrency file   */

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '60',
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
    document.title="cryptoX- Crypto Currency"
    axios.request(options)
    .then((response)=>{
      console.log(response.data.data);
      setData(response.data.data);
      setLoading(false);                                                 
    })
  }, [])

  return (
    <div className="container-sm">
      <div style={{height:'72px'}}></div>       {/* This is to leave some area for the fixed navigation bar*/}
    
      <h2>Top Global Crypto Currencies</h2>
      {(!loading) && <div className="d-flex flex-wrap justify-content-center">
      {
        (data?.coins).map((value) => {
          return <div className="d-flex justify-content-center"  key={value.name}>
            <CryptoItem mode={props.mode} rank={value.rank} name={value.name} iconUrl={value.iconUrl} price={value.price} marketCap={value.marketCap} dailyChange={value.change}/>
          </div>   
        })
      }
      </div> }
      {
      loading && <Spinner mode={props.mode}/>
      }
    </div>
  )
}

export default Search