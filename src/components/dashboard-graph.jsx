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

export default function DashboardGraph({ testAnalyticsData }) {
    // Process API data for the chart - show only last 7 days
    const processChartData = () => {
        // If no data or empty days array, return empty chart data
        if (!testAnalyticsData?.days || testAnalyticsData.days.length === 0) {
            return {
                labels: [],
                datasets: [
                    {
                        label: "Tested Clients",
                        data: [],
                        backgroundColor: "#0B3971",
                        borderRadius: 10,
                        borderSkipped: false,
                    },
                    {
                        label: "Not Tested Clients",
                        data: [],
                        backgroundColor: "#F5F7FA",
                        borderColor: "#E1E6ED",
                        borderWidth: 1,
                        borderRadius: 10,
                        borderSkipped: false,
                    },
                ],
                dateRange: "No data available"
            };
        }

        const days = testAnalyticsData.days;
        
        // Sort days by date to ensure chronological order
        const sortedDays = [...days].sort((a, b) => new Date(a.date) - new Date(b.date));
        
        // Get only the last 7 days
        const last7Days = sortedDays.slice(-7);
        
        // Extract labels (dates in short format)
        const labels = last7Days.map(day => {
            const date = new Date(day.date);
            return date.toLocaleDateString('en-US', { weekday: 'short' });
        });
        
        // Extract data for both datasets
        const testedData = last7Days.map(day => day.tested_clients || 0);
        const notTestedData = last7Days.map(day => day.not_tested_clients || 0);

        // Calculate date range for display
        const dateRange = getDateRange(last7Days);

        return {
            labels,
            datasets: [
                {
                    label: "Tested Clients",
                    data: testedData,
                    backgroundColor: "#0B3971",
                    borderRadius: 10,
                    borderSkipped: false,
                },
                {
                    label: "Not Tested Clients",
                    data: notTestedData,
                    backgroundColor: "#F5F7FA",
                    borderColor: "#E1E6ED",
                    borderWidth: 1,
                    borderRadius: 10,
                    borderSkipped: false,
                },
            ],
            dateRange
        };
    };

    // Helper function to get date range string
    const getDateRange = (days) => {
        if (!days || days.length === 0) return "No data available";
        
        const firstDate = new Date(days[0].date);
        const lastDate = new Date(days[days.length - 1].date);
        
        // Format dates as "12 July - 19 July"
        const formatDate = (date) => {
            const day = date.getDate();
            const month = date.toLocaleDateString('en-US', { month: 'long' });
            return `${day} ${month}`;
        };
        
        return `${formatDate(firstDate)} - ${formatDate(lastDate)}`;
    };

    const chartData = processChartData();

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
                    pointStyle: 'rect',
                    padding: 20,
                    font: {
                        size: 12
                    }
                },
            },
            tooltip: {
                backgroundColor: "#252525",
                titleColor: "#fff",
                bodyColor: "#fff",
                callbacks: {
                    title: (context) => {
                        // Show full date in tooltip
                        if (testAnalyticsData?.days?.[context[0].dataIndex]) {
                            const fullDate = new Date(testAnalyticsData.days[context[0].dataIndex].date);
                            return fullDate.toLocaleDateString('en-US', { 
                                day: 'numeric', 
                                month: 'long', 
                                year: 'numeric' 
                            });
                        }
                        return context[0].label;
                    },
                    label: (context) => {
                        const datasetLabel = context.dataset.label || '';
                        const value = context.parsed.y;
                        return `${datasetLabel}: ${value}`;
                    }
                }
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
        <div className="px-6">
            <div className="flex justify-center w-full h-[300px]">
                {chartData.labels.length > 0 ? (
                    <Bar data={chartData} options={options} />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        No test data available for the selected period
                    </div>
                )}
            </div>

            <div className="flex justify-center border-t border-[#E1E6ED] mt-[13px] pt-[13px]">
                <span className="text-[#535359] text-[10px] font-normal leading-[110%] tracking-[-0.2px]">
                    {chartData.dateRange}
                </span>
            </div>
        </div>
    );
}