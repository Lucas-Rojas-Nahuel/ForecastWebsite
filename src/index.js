import { fetchDataOfTime } from "./api/fetchDataOfTime.js";
import { weatherModel } from "./models/weather.model.js";

const location = "London,UK";

async function getData() {
  try {
    const data = await fetchDataOfTime(location);
    console.log(data);
    console.log(weatherModel(data));
  } catch (error) {
    console.error(error);
  }
}

getData();
