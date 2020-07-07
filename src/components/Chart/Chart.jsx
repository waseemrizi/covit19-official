import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      fetchDailyData();
      // const recievedData = await fetchDailyData();
      setDailyData(await fetchDailyData());
      // console.log(dailyData);
    };

    fetchApi();
  }, [setDailyData]);
  const modifiedData = dailyData.map((dailtData) => ({
    confirmed: dailtData.confirmed.total,
    deaths: dailtData.deaths.total,
    date: dailtData.reportDate,
  }));

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: modifiedData.map(({ date }) => date),
        datasets: [
          {
            data: modifiedData.map((data) => data.confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: modifiedData.map((data) => data.deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{<h1>{lineChart}</h1>}</div>;
};

export default Chart;
