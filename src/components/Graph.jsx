import axios from "axios";
import React, { useState, useEffect } from "react";
import "./CSS/CryptoDetails.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale
);

function Graph(props) {
  const [data, setData] = useState({
    labels: ["Jan", "Feb", "March", "April", "May", "June"],
    datasets: [
      {
        label: "First Dataset",
        data: [10, 20, 11, 13, 17, 19],
        backgroudColor: "yellow",
      },
    ],
  });

  return (
    <>
      <div>
        <h3>Graph:</h3>
         <Line data={data}>Hello</Line>  {console.log(data)}
      </div>
    </>
  );
}

export default Graph;
