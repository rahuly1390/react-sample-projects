import React from 'react'
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
  } from 'chart.js';
  import { Chart } from 'react-chartjs-2';
  import faker from 'faker';

  ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
  );
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        type: 'line',
        label: 'Net Invested Capital*',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 2,
        fill: false,
        data: labels.map(() => faker.datatype.number({ min: -100, max: 5000 })),
      },
      {
        type: 'line',
        label: 'Investment Earnings*',
        backgroundColor: 'purple',
        data: labels.map(() => faker.datatype.number({ min: -100, max: 5000 })),
        borderColor: 'purple',
        borderWidth: 2,
      },
      {
        type: 'bar',
        label: 'Total Value*',
        backgroundColor: 'rgb(53, 162, 235)',
        data: labels.map(() => faker.datatype.number({ min: -100, max: 5000 })),
      },
    ],
  };

  
const HistoricalCharts = () => {
  return (
    <div className='bg-card p-3 mt-2 mb-2'>
        <h4 className='mt-2'>Historical Value</h4>
       <Chart type='bar' data={data} />
        </div>
  )
}

export default HistoricalCharts