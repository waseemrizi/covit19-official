import React, {useState , useEffect} from 'react';
import {fetchDailyData} from '../../api';
import { Line } from 'react-chartjs-2';

//import styles from './Chart.module.css';

const Chart = () => {

  const [dailyData , setDailyData] = useState({});

  useEffect(() => {

    const fetchApi = async ()=>{
      setDailyData(await fetchDailyData());
    }
    console.log(dailyData);
    fetchApi();
  }, [])

  const lineChar = (
    dailyData[0]
    ?( 
    <Line
    data={{
      labels: '',
      datasets: [{}, {}],  
    }}
    />) : null
  );

  return (
    <div>
      <h1>Charts</h1>
    </div>
  );
};

export default Chart;