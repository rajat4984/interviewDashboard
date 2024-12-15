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
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    datasets: [
      {
        label: "Activity",
        data: [
          3000, 4000, 2000, 6000, 5000, 7000, 8000, 10000, 9000, 11000, 12000,
          15000, 13000, 14000, 7000, 4000, 6000, 8000, 12000, 9000, 16000,
          14000, 15000, 17000, 18000, 19000, 20000, 18000, 15000, 14000,
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
  <div className="h-80 bg-dashboard-card-bg p-5 pb-16 rounded-lg xl:w-[65%]">
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
