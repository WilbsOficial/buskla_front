import { useEffect, useRef, useState } from 'react';
import styles from './Testes.module.css';

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

const Navbar = () => {

   const [aparece, setAparece] = useState(false);

   let caixa = useRef();

   useEffect(() => {

    function handleClick(e) {
        if (aparece && !(caixa.current.contains(e.target))) {
            setAparece(false)
        }
    }

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };

   });

   const handleAparecer = () => {
    setAparece(true)
   }
  
   //console.log('aparecer ... ', aparece);

   const data = {
      labels: ["02/2024", "03/2024", "04/2024", "05/2024", "06/2024", "07/2024", "08/2024", "09/2024", "10/2024", "11/2024", "12/2024"],
      datasets: [{
        label: "Preço",
        data: [145.80, 149.00, 141.20],
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
      <div className={styles.test_area}>
        <button onClick={handleAparecer}>ativar</button>
         {aparece &&  <div className={styles.box_one} ref={caixa}>

        </div>}
        {/* {!aparece && 
          <div className={styles.box_two}>

          </div>
        } */}
        <div style={ {width: "800px"}}>
          <Line
            data={data}
            options={options}
          >
          </Line> 
        </div>
      </div>
    );
};
  
export default Navbar;