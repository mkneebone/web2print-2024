const div = document.getElementById("interactiveDiv");
const image = document.getElementById("targetImage"); 
const logDiv = document.getElementById("printLog");


const captureImageState = () => {
	const snapshot = image.cloneNode(true);
	snapshot.style.margin = "0";
	snapshot.style.display = "block";
	snapshot.classList.add("event-snapshot");
	return snapshot;
};

// log events
const logEvent = (event, changeDescription) => {
	const entryDiv = document.createElement("div");
	entryDiv.classList.add("event-log-entry");

	const eventInfo = `Event: ${event.type}, Time: ${new Date().toLocaleTimeString()}, Change: ${changeDescription}`;
	const logText = document.createElement("div");
	logText.textContent = eventInfo;
	logText.classList.add("log-text");

	const imageState = captureImageState();

	entryDiv.appendChild(logText);
	entryDiv.appendChild(imageState);

	logDiv.appendChild(entryDiv);
};

// events

div.addEventListener("click", (event) => {
	image.classList.toggle("invert");
	div.textContent = image.classList.contains("invert") ? "Invert On" : "Invert Off";
	logEvent(event, "Image inverted");
});

div.addEventListener("mouseenter", (event) => {
	image.classList.add("blur");
	div.textContent = "Blur On";
	logEvent(event, "Image blurred");
});

div.addEventListener("mouseleave", (event) => {
	image.classList.remove("blur");
	div.textContent = "Blur Off";
	logEvent(event, "Image unblurred");
});

div.addEventListener("dblclick", (event) => {
	image.classList.toggle("saturate");
	div.textContent = image.classList.contains("saturate") ? "Saturate On" : "Saturate Off";
	logEvent(event, "Image saturated");
});
