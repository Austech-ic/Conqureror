import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const ApexChart = () => {
  const seriesData = {
    monthDataSeries1: {
      prices: [
        /* your prices data */
      ],
      dates: ['Jan', 'Feb'],
    },
  };

  const [series, setSeries] = useState([
    {
      name: 'STOCK ABC',
      data: seriesData.monthDataSeries1.prices,
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: 'area',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
    title: {
      text: 'Fundamental Analysis of Stocks',
      align: 'left',
    },
    subtitle: {
      text: 'Price Movements',
      align: 'left',
    },
    labels: seriesData.monthDataSeries1.dates,
    xaxis: {
      type: 'number',
    },
    yaxis: {
      opposite: false,
    },
    legend: {
      horizontalAlign: 'left',
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
