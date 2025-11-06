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

// Register the components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DashboardGraph() {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Test Taken",
                data: [12, 19, 8, 15, 10, 14, 9],
                backgroundColor: "#0B3971",

                borderRadius: 10,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: "top",
                labels: {
                    color: "#252525",
                },
            },
            tooltip: {
                backgroundColor: "#252525",
                titleColor: "#fff",
                bodyColor: "#fff",
            },
        },
        scales: {
            x: {
                ticks: {
                    color: "#535359",
                },
                grid: {
                    display: false,
                },
                border: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
                ticks: {
                    display: false,
                },
                border: {
                    display: false,
                },
            },
        },
    };

    return (
        <div className="px-6 ">

            <div className="flex justify-center w-full h-[300px]">
                <Bar data={data} options={options} />
            </div>

            <div className="flex justify-center border-t border-[#E1E6ED] mt-[13px] pt-[13px]">
                <span className="text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px] ">12 July - 19 July</span>

            </div>
        </div>
    );
}
