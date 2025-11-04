"use client"
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// register components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DietGraph() {
  const data = {
    labels: ["Protein"],
    datasets: [
      {
        label: "Nutrients Intake",
        data: [80, 120, 60, 40, 150],
        backgroundColor: "#E48326",
        borderRadius: 5,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    indexAxis: "y", 
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#252525",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: { display: false },
       ticks: {
                    display: false,
                },
        border: { display: false },
      },
      y: {
        grid: { display: false },
     ticks: {
                    display: false,
                },
        border: { display: false },
      },
    },
  };

  return (
   
      <div className="">
        <Bar data={data} options={options} />
      </div>
   
  );
}
