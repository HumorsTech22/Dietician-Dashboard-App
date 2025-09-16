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

// hex → rgba helper
function hexToRgba(hex, alpha = 1) {
    const h = hex.replace("#", "");
    const f = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
    const r = parseInt(f.slice(0, 2), 16);
    const g = parseInt(f.slice(2, 4), 16);
    const b = parseInt(f.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Graph({
    title = "Absorptive Metabolism Score",
    labels = ["05 Aug", "06 Aug", "07 Aug", "07 Aug", "07 Aug", "07 Aug", "07 Aug"],
    values = [30, 65, 55, 48, 60, 54, 62],
    color = "#DA5747",
}) {
    const data = useMemo(() => ({
        labels,
        datasets: [{
            label: "Score",
            data: values.map(v => (typeof v === "string" ? Number(v) : v)),
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
            tooltip: { intersect: false, mode: "index" },
            tooltip: {
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
                min: 20,
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
            <div className="flex justify-center mb-2">
                <span className="text-[#535359] text-[12px] leading-[110%] tracking-[-0.24px]">
                    {title}
                </span>
            </div>

            <div className="w-full">
                <Line data={data} options={options}
                // width={400}   
                // height={180}  
                />
            </div>
        </div>
    );
}
