import React, { useEffect, useRef } from "react";
import moment from "moment";
import Chart from "chart.js";

export default function LineChart({ data }) {
  const chartRef = useRef();

  useEffect(() => {
    let _isMounted = true;

    if (_isMounted) {
      const dates = [],
        reps = [],
        resistance = [];
      data.forEach((set) => {
        dates.push(moment(set.when).format("MM/DD/YYYY"));
        reps.push(set.reps);
        resistance.push(set.resistance.weight);
      });

      const myChartRef = chartRef.current.getContext("2d");
      const repsGradient = myChartRef.createLinearGradient(0, 0, 0, 300);
      const resistanceGradient = myChartRef.createLinearGradient(0, 0, 0, 300);

      repsGradient.addColorStop(0, "rgba(47, 218, 198, 1)");
      repsGradient.addColorStop(0.5, "rgba(47, 218, 198, 0.5)");
      repsGradient.addColorStop(1, "rgba(47, 218, 198, 0)");

      resistanceGradient.addColorStop(0, "rgba(44, 105, 140, 1)");
      resistanceGradient.addColorStop(0.5, "rgba(44, 105, 140, 0.5)");
      resistanceGradient.addColorStop(1, "rgba(44, 105, 140, 0)");

      new Chart(myChartRef, {
        type: "line",
        data: {
          //Bring in data
          labels: dates,
          datasets: [
            {
              label: "Reps",
              data: reps,
              borderColor: "#1b998b",
              backgroundColor: repsGradient,
              borderWidth: 1,
              pointColor: "#1b998b",
            },
            {
              label: "Resistance",
              data: resistance,
              borderColor: "#2c698c",
              backgroundColor: resistanceGradient,
              borderWidth: 1,
              pointColor: "#2c698c",
            },
          ],
        },

        options: {
          //Customize chart options
          legend: {
            labels: {
              fontColor: "#eef0eb",
            },
          },
          scales: {
            responsive: true,
            datasetStrokeWidth: 3,
            pointDotStrokeWidth: 4,
            yAxes: [
              {
                ticks: {
                  fontColor: "rgba(255,255,255,0.7)",
                  beginAtZero: true,
                  maxTicksLimit: 5,
                  padding: 20,
                },
                gridLines: {
                  drawTicks: false,
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  zeroLineColor: "transparent",
                },
                ticks: {
                  padding: 20,
                  fontColor: "rgba(255,255,255,0.7)",
                },
              },
            ],
          },
        },
      });
    }
    return () => {
      _isMounted = false;
    };
  }, [data]);
  return (
    <div>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
}
