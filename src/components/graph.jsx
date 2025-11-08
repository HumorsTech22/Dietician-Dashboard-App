"use client";

import { useMemo } from "react";
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
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

// Soft stroke shadow (matches that subtle glow on the red line)
const SoftShadow = {
    id: "softShadow",
    beforeDatasetsDraw(chart, _args, pluginOpts) {
        const { ctx } = chart;
        ctx.save();
        ctx.shadowColor = pluginOpts?.color ?? "rgba(218,87,71,0.45)";
        ctx.shadowBlur = pluginOpts?.blur ?? 6;
        ctx.shadowOffsetY = 0;
        ctx.lineJoin = "round";
        ctx.lineCap = "round";
    },
    afterDatasetsDraw(chart) {
        chart.ctx.restore();
    }
};

ChartJS.register(SoftShadow);

export default function Graph({
    title = "",
    labels = [],
    values = [],
    color = "#DA5747",
}) {
    const data = useMemo(() => ({
        labels,
        datasets: [{
            label: "Score",
            data: values.map(v => {
                const numValue = typeof v === "string" ? Number(v) : v;
                return isNaN(numValue) ? 0 : numValue; // Handle NaN values
            }),
            borderColor: color,
            borderWidth: 3,
            pointRadius: 0,
            tension: 0.45,                 // smooth curve like the mock
            fill: true,
            backgroundColor: (ctx) => {
                const { chartArea, ctx: c } = ctx.chart;
                if (!chartArea) return "rgba(218,87,71,0.3)"; // fallback

                const g = c.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                g.addColorStop(0, "rgba(218,87,71,0.3)"); // top color ~ from-[#DA5747] with opacity
                g.addColorStop(1, "rgba(218,87,71,0)");   // bottom color transparent
                return g;
            }
        }],
    }), [labels, values, color]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        animations: {
            colors: false,
            x: { duration: 0 },
            y: { duration: 0 },
            tension: { duration: 0 },
        },
        transitions: {
            active: { animation: { duration: 0 } },
        },
        plugins: {
            legend: { display: false },
            title: { display: false },
            tooltip: { 
                intersect: false, 
                mode: "index",
                enabled: false,
            },
            softShadow: { color: "rgba(218,87,71,0.45)", blur: 0 },
        },
        elements: {
            line: {
                borderJoinStyle: "round",
                borderCapStyle: "round",
            },
        },
        layout: { padding: { top: 8 } },
        scales: {
            y: {
                min: 0,
                max: 100,
                ticks: {
                    stepSize: 20,
                    color: "#A1A1A1",
                    font: { size: 10 },
                },
                grid: { display: false },
                border: { display: true, color: "#D9D9D9" }, // left axis line
            },
            x: {
                ticks: {
                    color: "#A1A1A1",
                    font: { size: 10 },
                    // "05 Aug" → two lines: ["05", "Aug"]
                    callback(value, index) {
                        // @ts-ignore - in Chart.js v4, `this` is the scale
                        const label = this.getLabelForValue(value);
                        const [d, m] = String(label).split(" ");
                        return [d ?? "", m ?? ""];
                    },
                },
                grid: { display: false },
                border: { display: true, color: "#D9D9D9" }, // bottom axis line
            },
        },
    };

    return (
        <div className="w-full">
            <Line 
                data={data} 
                options={options}
                // width={400}   
                // height={180}  
            />
        </div>
    );
}