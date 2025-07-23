const API_KEY = process.env.TIMELINE_API_KEY;

export async function fetchDataOfTime(location) {
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}&lang=es`;

  const response = await fetch(URL);
  return await response.json();
}
