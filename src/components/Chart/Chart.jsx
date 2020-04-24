import React, { useEffect, useState } from 'react';
import { useChartStyles } from '../../styles';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const classes = useChartStyles();
  const [dailyData, setDailyData] = useState([]);
  const getDailyData = async () => {
    const response = await fetchDailyData();
    setDailyData(response);
  };

  useEffect(() => {
    getDailyData();
  }, []);

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Κρούσματα',
            borderColor: '#f39c12',
            backgroundColor: 'rgba(243, 156, 18, 0.5)',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Θάνατοι',
            borderColor: '#dd4b39',
            backgroundColor: 'rgba(221, 70, 57, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Κρούσματα', 'Αναρρώσεις', 'Θάνατοι'],
        datasets: [
          {
            label: 'Άτομα',
            backgroundColor: [
              'rgb(243, 156, 18)',
              'rgb(0, 115, 183)',
              'rgb(221, 70, 57)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Τρέχουσα κατάσταση στην ${country}` },
      }}
    />
  ) : null;

  return <div className={classes.container}>{country ? barChart : lineChart}</div>;
};

export default Chart;
