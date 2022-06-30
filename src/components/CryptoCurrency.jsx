import React, { useEffect, useState} from 'react'
import CryptoItem from './CryptoItem'
import Spinner from './Spinner'
import axios from 'axios';

const CryptoCurrency = (props) => {

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      search:(props.type==='search')?props.search:'',
      limit: '80',
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
      <div style={{height:'72px'}}></div>   {/* This is to leave some area for the fixed navigation bar*/}
    
      {
        (props.type==='crypto') && <h2>Top Global Crypto Currencies</h2>    //If <CryptoCurrency> component is being used for displaying the top cryptocurrencies, then this will be displayed
      }
      {       // If <CryptoCurrency> component is being used as a search bar then this will be displayed
        (props.type==='search') && <div>
          <h2>Here are the Search Results</h2>
          {
            (data?.stats?.total===0) && <div>No results found</div>   //This will be displayed if no results are found
          }
          </div>
      }

      {(!loading) && <div className="d-flex flex-wrap justify-content-center">
      {
        (data?.coins).map((value) => {
          return <div className="d-flex justify-content-center"  key={value.name}>
            <CryptoItem mode={props.mode} uuid={value.uuid} rank={value.rank} name={value.name} iconUrl={value.iconUrl} price={value.price} marketCap={value.marketCap} dailyChange={value.change}/>
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

export default CryptoCurrency