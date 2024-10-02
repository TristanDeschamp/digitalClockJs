// Get all needed id's for changing the front
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

setInterval(() => {
	// Get the current time
	let currentTime = new Date();
	
	// Update the html elements with the current time
	hours.innerHTML = currentTime.getHours();
	minutes.innerHTML = currentTime.getMinutes();
	seconds.innerHTML = currentTime.getSeconds();
}, 1000);
