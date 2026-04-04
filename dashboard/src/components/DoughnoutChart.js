import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ data }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
