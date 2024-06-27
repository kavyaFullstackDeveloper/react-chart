import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import jsonData from './data.json'; // Import your JSON data

Chart.register(zoomPlugin);

interface ChartProps {
  initialTimeframe?: 'day' | 'week' | 'month';
}

const ChartComponent: React.FC<ChartProps> = ({ initialTimeframe = 'day' }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const [chart, setChart] = useState<Chart<"line", number[], string> | null>(null); // Specify "line" type for Chart
  const [chartData, setChartData] = useState<ChartData<"line", number[], string> | null>(null); // Specify "line" type for ChartData

  useEffect(() => {
    const groupedData = groupDataByTimeframe(jsonData, initialTimeframe);

    const processedData: ChartData<"line", number[], string> = {
      labels: groupedData.map(group => group.label),
      datasets: [{
        label: 'Value',
        data: groupedData.map(group => group.total).filter((value): value is number => typeof value === 'number'), // Ensure data is an array of numbers
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 1,
      }],
    };

    setChartData(processedData);
  }, [initialTimeframe]);

  useEffect(() => {
    if (chartRef.current && chartData) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chart) {
          chart.destroy(); // Destroy the existing chart instance if it exists
        }
        const newChart = new Chart(ctx, {
          type: 'line',
          data: chartData,
          options: getChartOptions(),
        });

        setChart(newChart);
      }
    }

    return () => {
      if (chart) {
        chart.destroy(); // Cleanup the chart on component unmount
      }
    };
  }, [chartData]);

  const getChartOptions = (): ChartOptions<'line'> => {
    return {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        zoom: {
          pan: {
            enabled: true,
            mode: 'xy',
          },
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: 'x',
          },
        },
      },
      interaction: {
        mode: 'index',
        intersect: false,
      },
    };
  };

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

function groupDataByTimeframe(data: any[], timeframe: 'day' | 'week' | 'month') {
  return data.map(item => ({
    label: new Date(item.timestamp).toLocaleDateString(),
    total: item.value,
  }));
}

export default ChartComponent;
