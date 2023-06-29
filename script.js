// Get the <p> element by its id
const timerElement = document.getElementById('timer');

// Function to update the timer
function updateTimer() {
  // Get the current date and time
  const currentDate = new Date();

  // Extract the date, month, year, hours, minutes, and seconds from the current date
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  const year = currentDate.getFullYear();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format the date and time as a string
  const timerText = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;

  // Update the <p> element with the timer text
  timerElement.textContent = timerText;
}

// Call the updateTimer function initially to set the initial timer value
updateTimer();

// Update the timer every second (1000 milliseconds)
setInterval(updateTimer, 1000);
