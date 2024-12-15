import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Chart = () => {
  const data = {
    labels: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
    datasets: [
      {
        label: "Activity",
        data: [
          5000, 2000, 7000, 4000, 5000, 6000, 12000, 8000, 15000, 7000, 10000,
        ],
        backgroundColor: "rgba(114, 144, 255, 0.8)", // Blue shade
        borderRadius: 25,
        borderSkipped: false,
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
        enabled: true,
        backgroundColor: "#1f2937",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        cornerRadius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#9ca3af",
        },
      },
      y: {
        grid: {
          color: "#374151",
        },
        ticks: {
          color: "#9ca3af",
        },
      },
    },
  };

  return (
    <div className="h-80 bg-dashboard-card-bg p-5 rounded-lg w-[65%]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">Activity</h2>
        <select
          className="bg-[#374151] text-white text-sm p-2 cursor-pointer outline-none rounded-full pr-3"
          defaultValue="Weekly"
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chart;
