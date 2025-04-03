let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let ampm = '';

    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
    }

    const timeString = `${String(hours).padStart(2, '0')}:${minutes}:${seconds} ${ampm}`.trim();
    document.getElementById('clock').textContent = timeString;
}

document.getElementById('toggleFormat').addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    document.getElementById('toggleFormat').textContent = is24HourFormat ? 'Switch to 12-Hour Format' : 'Switch to 24-Hour Format';
    updateClock(); // Update the display immediately
});

// Initial call to set the clock
updateClock();
setInterval(updateClock, 1000);




