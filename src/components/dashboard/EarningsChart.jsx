import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

const EarningsChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, "rgba(255, 159, 64, 0.3)");
      gradient.addColorStop(1, "rgba(255, 159, 64, 0)");

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  const data = {
    labels: ["", "", "", "", "", ""],
    datasets: [
      {
        fill: true,
        data: [50, 25, 75, 30, 60, 80],
        borderColor: "rgb(255, 159, 64)",
        borderWidth: 3,
        backgroundColor: "rgba(255, 159, 64, 0.1)", // This will be overwritten by the gradient
        tension: 0.4,
        pointRadius: [0, 0, 0, 0, 6, 0],
        pointBackgroundColor: "#fff",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div className="w-full h-full">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default EarningsChart;
