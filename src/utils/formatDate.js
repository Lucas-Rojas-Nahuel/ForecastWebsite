export function formatDate(date) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const getDate = new Date(`${date}T00:00:00`);
  const formattedDate = new Intl.DateTimeFormat("es-AR", options).format(
    getDate
  );
  return formattedDate;
}
