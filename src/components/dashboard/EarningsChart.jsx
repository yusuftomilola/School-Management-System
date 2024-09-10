import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const EarningsChart = () => {
  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Wave Line",
        data: [2, 3, 1, 4, 3, 5, 4], // Points for the wavy shape
        borderColor: "#FF8C00", // Orange color for the line
        borderWidth: 3,
        fill: {
          target: "origin", // This fills the area below the line
          above: "rgba(255, 165, 0, 0.3)", // Orange-like background for the filled part
        },
        pointRadius: [0, 0, 0, 0, 0, 0, 6], // Adding a larger point for the last circle
        pointBackgroundColor: "#FF8C00", // The color of the circle
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // This ensures the chart doesn't maintain the default aspect ratio
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
      },
    },
    elements: {
      line: {
        tension: 0.4, // This creates the curve effect
      },
    },
  };

  return <Line data={data} options={options} height={120} />;
};

export default EarningsChart;
