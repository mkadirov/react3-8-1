import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1, 5, 3, 7, 4, 8],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'blue',
    },
    {
      label: 'Dataset 2',
      data: [4, 5, 7, 3, 6, 3],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'red',
    },
  ],
};

function LineChart() {
  return <Line options={options} data={data} />;
}

export default LineChart;
