import axios from "axios";
import React, { useState, useEffect } from "react";
import "./CSS/CryptoDetails.css";
import { Line, Canvas, Bar } from "react-chartjs-2";

function Graph(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

  const requestFromApi = {
    method: "GET",
    url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history",
    params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: "24h" },
    headers: {
      "X-RapidAPI-Key": "d82da8df05mshfae8884b0e16928p16edf0jsnf10fac003be5",
      "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios.request(requestFromApi).then((response) => {
      setData(response.data?.data);
      setLoading(false);
    });
  }, []);

  let coinPrice = [];
  let coinTimeStamp = [];
  for (let i = 0; i < data?.history?.length; i++) {
    coinPrice.push(data?.history[i]?.price);
    coinTimeStamp.push(data?.history[i]?.timestamp);
  }

  const graphData = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroudColor: "green",
        borderColor: "cyan",
      }
    ]
  }

  const options = {
    scales: {
      yAxes: [
        {
            ticks: {     
                beginAtZero: true
            }
        }
      ]
    },
  }

  return (
    <>
      {!loading && (
        <div>
          <h3>Graph:</h3>
          <Bar data={graphData} />       {console.log(graphData)}
        </div>
      )}
    </>
  );
}

export default Graph;
