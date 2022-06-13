import React from 'react';
import loadingLight from './Images/loading-light.gif';
import loadingDark from './Images/loading-dark.gif';

export default function Spinner(props) {
  return (
    <div style={{height:'35vh', display:'flex', justifyContent:'center', alignItems:'flex-end'}} >
        <div className="spinner" style={{}}>
          <img src={props.mode==='light'?loadingLight:loadingDark} alt="loading..." />
        </div>
    </div>
  )
}