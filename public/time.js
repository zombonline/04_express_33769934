function updateTime() {
// Get the element with id 'time' and update its content
  const el = document.getElementById('time');
  if (!el) return;
  el.textContent = new Date().toString();
}

// Initialize the time display when the HTML document is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  updateTime();               
  setInterval(updateTime, 1000);
});
