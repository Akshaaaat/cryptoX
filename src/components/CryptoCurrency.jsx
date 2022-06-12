import React from 'react'
import CryptoItem from './CryptoItem'

const CryptoCurrency = (props) => {
  return (
    <div className="container">
      <div style={{height:'71px'}}></div>       {/* This is to leave some area for the fixed navigation bar*/}
      <div>This is the crypto Page</div>
      <CryptoItem title="lmao" desc="Hii" />

    </div>
  )
}

export default CryptoCurrency