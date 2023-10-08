import React from "react";
import { Line } from "react-chartjs-2";

function Graph({ chartData }) {
  return (
    <div className="chart-container mt-5">
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Number of Users, Calls and Failtures"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default Graph;