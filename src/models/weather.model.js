import { formatDate } from "../utils/formatDate";
import { timeFormat } from "../utils/timeFormat";

//destructuramos informacion para ver datos del dia de hoy del clima
export function weatherModel(data) {
  if (data) {
    return {
      address: data.address,
      datetime: formatDate(data.days[0].datetime),
      hour: timeFormat(),
      temp: data.days[0].temp,
      tempMax: data.days[0].tempmax,
      tempMin: data.days[0].tempmin,
      conditions: data.days[0].conditions,
      icon: data.days[0].icon,
    };
  }
}
