document.addEventListener("DOMContentLoaded", () => {
  // Manually set the next major event date and time
  const eventDate = new Date("2025-03-20T10:00:00");

  // Update countdown every second
  const countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Select countdown elements
      const daysEl = document.getElementById("days");
      const hoursEl = document.getElementById("hours");
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");

      // Ensure elements exist before updating them
      if (daysEl && hoursEl && minutesEl && secondsEl) {
          daysEl.textContent = days.toString().padStart(2, "0");
          hoursEl.textContent = hours.toString().padStart(2, "0");
          minutesEl.textContent = minutes.toString().padStart(2, "0");
          secondsEl.textContent = seconds.toString().padStart(2, "0");
      } else {
          console.error("Countdown elements are missing from the DOM.");
      }

      // If the countdown is finished, clear the interval
      if (distance < 0) {
          clearInterval(countdownInterval);
          daysEl.textContent = "00";
          hoursEl.textContent = "00";
          minutesEl.textContent = "00";
          secondsEl.textContent = "00";
      }
  }, 1000);
});
