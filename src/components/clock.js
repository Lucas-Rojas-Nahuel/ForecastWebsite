import { timeFormat } from "../utils/timeFormat";

export function startClock(selector) {
  const hourElement = document.querySelector(selector);
  if (!hourElement) return;

  function updateHour() {
    const formattedHour = timeFormat();
    hourElement.textContent = formattedHour;
  }

  function synchronizeWithTheMinute() {
    updateHour();

    const hour = new Date();
    const msRestantes =
      (60 - hour.getSeconds()) * 1000 - hour.getMilliseconds();

    setTimeout(() => {
      updateHour();
      setInterval(updateHour, 60 * 1000);
    }, msRestantes);
  }
  synchronizeWithTheMinute();
}
