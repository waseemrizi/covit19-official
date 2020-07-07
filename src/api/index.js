import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const modifiedData = { confirmed, recovered, deaths, lastUpdate };

    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.url(`${url}/daily`);
    const modifiedData = data.map((dailtData)=>({
      confirmed: dailtData.confirmed.total,
      deaths: dailtData.deaths.total,
      date: dailtData.date.reportDate,
    }))
    return modifiedData;
  } catch (error) {}
};
