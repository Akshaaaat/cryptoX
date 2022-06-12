import React from "react";
import './CSS/CryptoItem.css';

function CryptoItem(props) {
  return (
    <div className="my-2 mx-2 ">
      <div className="card shadow p-3 mb-5 card-hover card-width" style={{backgroundColor:props.mode==='light'?'white':'#001429'}}>
        <div className="card-body">
            <div className="card-title d-flex justify-content-between align-items-center">
              <h5>
                {props.name} 
              </h5>
            <div className="coin-logo">
              <img 
                src={props.iconUrl?props.iconUrl:'https://st3.depositphotos.com/23594922/31822/v/1600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'} 
                style={{height:'50px'}}
                alt="image"
              />
            </div>
          </div>
            <p className="card-text">
                <span className="title-CryptoItem">Price: </span><span>{props.price}</span>
                <br />
                <span className="title-CryptoItem">Market Cap: </span><span>{props.marketCap}</span>
                <br />
                <span className="title-CryptoItem">Daily Change: </span><span>{props.dailyChange} %</span>
            </p>
            <a href="https://www.google.com" className="btn btn-outline-info btn-sm">
                More Details
            </a>
        </div>
      </div>
    </div>
  );
}

export default CryptoItem;
