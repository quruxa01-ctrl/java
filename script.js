function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add 0 before numbers below 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").textContent =
        hours + ":" + minutes + ":" + seconds;

    // Display the date
    const date = now.toDateString();

    document.getElementById("date").textContent = date;
}

// Run the function immediately
updateClock();

// Update the clock every 1 second
setInterval(updateClock, 1000);