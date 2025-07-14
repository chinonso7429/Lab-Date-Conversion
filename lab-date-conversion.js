** start of script.js **

const currentDate=new Date();
const currentDateFormat = `Current Date and Time: ${new Date().toLocaleString('en-US', {
  weekday: 'short',
  month: 'short',
  day: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short',
  hour12: false
})}`;
console.log(currentDateFormat);
function formatDateMMDDYYYY(date) {
  const month = date.getMonth() + 1; // getMonth() is zero-based
  const day = date.getDate();
  const year = date.getFullYear();

  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`;
}
function formatDateLong(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  return `Formatted Date (Month Day, Year): ${formattedDate}`;
}

** end of script.js **

