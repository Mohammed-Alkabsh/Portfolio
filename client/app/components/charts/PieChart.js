import React, { useEffect, useRef } from "react";
import moment from "moment";
import Chart from "chart.js";

export default function PieChart({ labels, data, id }) {
  const chartRef = useRef();

  useEffect(() => {
    let _isMounted = true;

    if (_isMounted) {
      const myChartRef = chartRef.current.getContext("2d");
      new Chart(myChartRef, {
        type: "doughnut",
        data: {
          datasets: [
            {
              data: data,
              backgroundColor: [
                "#2c698c",
                "#1b998b",
                "#c83e4d",
                "#ffd700",
                "#8f2834",
                "#0f574e",
                "#e0bf00",
              ],
              hoverBackgroundColor: [
                "#3B8BBA",
                "#2fdac6",
                "#db808a",
                "#ffe347",
                "#3B8BBA",
                "#2fdac6",
                "#db808a",
                "#ffe347",
              ],
            },
          ],
          labels: labels,
        },
        options: {
          cutoutPercentage: 40,
          legend: {
            labels: {
              fontColor: "#eef0eb",
            },
          },
        },
      });
    }
    return () => {
      _isMounted = false;
    };
  }, []);
  return (
    <div>
      <canvas id={id} ref={chartRef} />
    </div>
  );
}
