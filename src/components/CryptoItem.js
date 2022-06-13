import React from "react";
import {Link} from 'react-router-dom';
import './CSS/CryptoItem.css';

function CryptoItem(props) {
  return (
    <div className="my-2 mx-2 ">
      <Link to={`/crypto/${props.rank} `} className="card shadow p-3 mb-5 card-hover card-width" style={{backgroundColor:props.mode==='light'?'white':'#001429', color:props.mode==='light'?'black':'whitesmoke', textDecoration:'none'}}>
        <div className="card-body">
            <div className="card-title d-flex justify-content-between align-items-center">
              <div className="heading">
                <h5>
                  {props.name} 
                </h5>
                {(props.dailyChange>0) && <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="green" className="bi bi-chevron-double-up" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"/>
                  <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                </svg>}
                {(props.dailyChange<0) && <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="red" className="bi bi-chevron-double-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  <path fillRule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>}
              </div>
              <div className="coin-logo">
                <img 
                  src={props.iconUrl?props.iconUrl:'https://st3.depositphotos.com/23594922/31822/v/1600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'} 
                  style={{height:'50px'}}
                  alt="image"
                />
              </div>
            </div>
            <p className="card-text">
                <span className="title-CryptoItem">Price: </span><span>{props.price}
                </span>
                <br />
                <span className="title-CryptoItem">Market Cap: </span><span>{props.marketCap}</span>
                <br />
                <span className="title-CryptoItem">Daily Change: </span>
                <span style={{color:props.dailyChange>0?'green':'red'}}>
                  {props.dailyChange} % 
                </span>
                
            </p>
        </div>
      </Link>
    </div>
  );
}

export default CryptoItem;
