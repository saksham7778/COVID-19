import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import { fetchDailyData } from '../../api';
import styles from './Chart.module.css';

const Chart = ()=>{
  
  const [dailyData, setDailyData] = useState([]);
  
  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();
      setDailyData(initialDailyData);
    };
    fetchMyAPI();
  });

  const lineChart = (

    dailyData.length ? (
      <Line
        data={{
          labels: dailyData.map( (data) => data.date),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  return(
    <div className={styles.container}>
      {lineChart}
    </div>
  );
}

export default Chart;