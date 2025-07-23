import { fetchDataOfTime } from "./api/fetchDataOfTime.js";

const location = "London,UK";

async function getData() {
  try {
    const data = await fetchDataOfTime(location);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getData()