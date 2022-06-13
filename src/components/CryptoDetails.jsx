import React, { useState } from "react";
import { useParams } from 'react-router-dom';

import './CSS/CryptoDetails.css';

export default function CryptoDetails(props) {

  const { coinID }= useParams();

  return (
    <div>
      <div style={{ height: "71px" }}></div>{" "}           {/* This is to leave some area for the fixed navigation bar*/}
      <div>This is the cryptodetails page {coinID}</div>

    </div>
  );
}