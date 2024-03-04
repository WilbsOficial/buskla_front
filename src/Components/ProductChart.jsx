import styles from "./ProductChart.module.css";
import { useEffect, useState } from "react";
import api from "../Services/api";

import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from "chart.js";
  
import { Line } from 'react-chartjs-2';
  
ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);
 
const ProductChart = ({itemGroup}) => {

  const [graphicData, setGraphicData] = useState([]);

  // console.log("itemGroup: ", itemGroup);

  useEffect(() => {
    async function arrChart() {
      await api.post("/grafico", {
        groupName: itemGroup
      })
      .then((res) => {
        // const getData = res.data;
        // let getPriceInNum = [];
        // for (let i=0; i < getData.months.length; i++) {
        //   parseFloat()
        // };
        // console.log("the res: ", res.data)
        setGraphicData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    };

    arrChart();
  }, []);

  const data = {
    labels: ["02/2024", "03/2024", "04/2024", "05/2024", "06/2024", "07/2024", "08/2024", "09/2024", "10/2024", "11/2024", "12/2024"],
    datasets: [{
      label: "Preço",
      data: graphicData,
    //  data: [120.90, 76.88],
      borderColor: "#accf86",
      backgroundColor: "#accf86",
      pointRadius: 5,
      pointBorderColor: "#383838",
      pointBackgroundColor: "#383838",
      tension: 0.4
    }]
  };
  
  const options = {
    plugins: {
      legend: {
        display: false
      }
    }
  };
    
  return (
    <div className={styles.graphic_area}>
      <Line
        data={data}
        options={options}
      >
      </Line> 
    </div>
  ); 
};
  
export default ProductChart;