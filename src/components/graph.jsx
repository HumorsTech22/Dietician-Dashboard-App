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

// Soft stroke shadow (optional subtle glow)
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
  },
};

ChartJS.register(SoftShadow);

// Helper: convert hex -> rgba string
const hexToRgba = (hex, alpha = 1) => {
  let c = hex.replace("#", "");
  if (c.length === 3) {
    c = c
      .split("")
      .map((ch) => ch + ch)
      .join("");
  }
  const num = parseInt(c, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Helper: get line color based on title + value
const getColorByScore = (type, value, fallback = "#DA5747") => {
  const v = Number(value) || 0;

  switch (type) {
    case "Absorptive Metabolism Score":
      if (v > 80) return "#3FAF58";
      if (v >= 50) return "#FFC412";
      return "#DA5747";

    case "Fermentative Metabolism Score":
      if (v < 30) return "#3FAF58";
      if (v <= 35) return "#FFC412";
      return "#DA5747";

    case "Fat Metabolism Score":
      if (v > 80) return "#3FAF58";
      if (v >= 70) return "#FFC412";
      return "#DA5747";

    case "Glucose Metabolism Score":
      if (v < 40) return "#3FAF58";
      if (v <= 60) return "#FFC412";
      return "#DA5747";

    case "Hepatic Stress Score":
      if (v < 30) return "#3FAF58";
      if (v <= 60) return "#FFC412";
      return "#DA5747";

    case "Detoxification Metabolism Score":
      if (v > 80) return "#3FAF58";
      if (v >= 50) return "#FFC412";
      return "#DA5747";

    default:
      return fallback;
  }
};

export default function Graph({
  title = "",
  labels = [],
  values = [],
  color = "#DA5747", // fallback if title not matched
}) {

  // 🔹 THIS decides "second graph" behaviour
  const isSecondScore =
    title === "Fermentative Metabolism Score" ||
    title === "Glucose Metabolism Score" ||
    title === "Detoxification Metabolism Score";

  // latest value decides the color bucket
  const lastRawValue = values?.length ? values[values.length - 1] : 0;
  const lastNum =
    typeof lastRawValue === "string" ? Number(lastRawValue) : lastRawValue;
  const chosenColor = getColorByScore(title, lastNum, color);

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Score",
          data: values.map((v) => {
            const numValue = typeof v === "string" ? Number(v) : v;
            return isNaN(numValue) ? 0 : numValue;
          }),
          borderColor: chosenColor,
          borderWidth: 3,
          pointRadius: 3,                // 👈 visible points on all data
          pointHoverRadius: 5,           // bigger on hover
          pointHitRadius: 8,             // easier to hover
          pointBackgroundColor: chosenColor,
          pointBorderColor: "#FFFFFF",
          pointBorderWidth: 1.5,
          tension: 0.45,                 // smooth curve
          fill: true,

          backgroundColor: (ctx) => {
            // ❌ Remove gradient for second graph
            if (isSecondScore) {
              return "rgba(0,0,0,0)"; // fully transparent
            }

            const { chartArea, ctx: c } = ctx.chart;
            if (!chartArea) return hexToRgba(chosenColor, 0.3);

            const g = c.createLinearGradient(
              0,
              chartArea.top,
              0,
              chartArea.bottom
            );

            g.addColorStop(0, hexToRgba(chosenColor, 0.3));
            g.addColorStop(1, hexToRgba(chosenColor, 0));

            return g;
          },

        },
      ],
    }),
    [labels, values, chosenColor]
  );

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
        enabled: true,
        intersect: false,
        mode: "index",
        callbacks: {
          title(items) {
            if (!items?.length) return "";
            const idx = items[0].dataIndex;
            return labels[idx] || "";
          },
          label(context) {
            const value = context.parsed.y ?? "";
            return `Score: ${value}`;
          },
        },
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
        // 🔥 KEY LINE: only second graph shows ticks 0,20,...100 from TOP to BOTTOM
        reverse: isSecondScore, // true => top=0, bottom=100
        ticks: {
          stepSize: 20,
          color: "#A1A1A1",
          font: { size: 10 },
        },
        grid: { display: false },
        border: { display: true, color: "#D9D9D9" },
      },
      x: {
        ticks: {
          color: "#A1A1A1",
          font: { size: 10 },
          callback(value) {
            // in Chart.js v4, `this` is the scale
            const label = this.getLabelForValue(value);
            const [d, m] = String(label).split(" ");
            return [d ?? "", m ?? ""];
          },
        },
        grid: { display: true },
        border: { display: true, color: "#D9D9D9" },
      },
    },
  };

  return (
    <div className="w-full">
      <Line data={data} options={options} />
    </div>
  );
}
