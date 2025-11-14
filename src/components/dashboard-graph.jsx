"use client";
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

export default function DashboardGraph({ testAnalyticsData }) {
  const processChartData = () => {
    if (!testAnalyticsData?.days || testAnalyticsData.days.length === 0) {
      return {
        labels: [],
        datasets: [],
        dateRange: "No data available",
        rawDays: [],
      };
    }

    const days = testAnalyticsData.days;

    // sort by date
    const sortedDays = [...days].sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );

    // last 7 days
    const last7Days = sortedDays.slice(-7);

    const labels = last7Days.map((day) => {
      const d = new Date(day.date);
      return d.toLocaleDateString("en-US", { weekday: "short" }); // Mon, Tue...
    });

    const testedData = last7Days.map((day) => day.tested_clients || 0);
    const notTestedData = last7Days.map((day) => day.not_tested_clients || 0);

    const dateRange = getDateRange(last7Days);

    return {
      labels,
      datasets: [
        // ✅ bottom part of stacked bar
        {
          label: "Tested Clients",
          data: testedData,
          backgroundColor: "#0B3971",
          borderRadius: 10,
          borderSkipped: false,
          stack: "clients",
        },
        // ✅ top part of stacked bar
        {
          label: "Not Tested Clients",
          data: notTestedData,
          backgroundColor: "#F5F7FA",
          borderRadius: 10,
          borderSkipped: false,
          stack: "clients",
        },
      ],
      dateRange,
      rawDays: last7Days,
    };
  };

  const getDateRange = (days) => {
    if (!days || days.length === 0) return "No data available";

    const firstDate = new Date(days[0].date);
    const lastDate = new Date(days[days.length - 1].date);

    const formatDate = (date) => {
      const day = date.getDate();
      const month = date.toLocaleDateString("en-US", { month: "long" });
      return `${day} ${month}`;
    };

    return `${formatDate(firstDate)} - ${formatDate(lastDate)}`;
  };

  const { labels, datasets, dateRange, rawDays } = processChartData();

  const chartData = { labels, datasets };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#252525",
          usePointStyle: true,
          pointStyle: "rect",
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: "#252525",
        titleColor: "#fff",
        bodyColor: "#fff",
        callbacks: {
          title: (context) => {
            const index = context[0].dataIndex;
            const dayObj = rawDays?.[index];

            if (dayObj?.date) {
              const fullDate = new Date(dayObj.date);
              return fullDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });
            }

            return context[0].label;
          },
          label: (context) => {
            const datasetLabel = context.dataset.label || "";
            const value = context.parsed.y;
            return `${datasetLabel}: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true, // ✅ make bars inline per day
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
        stacked: true, // ✅ stack tested + not tested
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
    <div className="px-6">
      <div className="flex justify-center w-full h-[300px]">
        {chartData.labels.length > 0 ? (
          <Bar data={chartData} options={options} />
        ) : (
          <div className="flex items-center justify-center h-full text-[#A1A1A1]">
            No test data available for the selected period
          </div>
        )}
      </div>

      <div className="flex justify-center border-t border-[#E1E6ED] mt-[13px] pt-[13px]">
        <span className="text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
          {dateRange}
        </span>
      </div>
    </div>
  );
}
