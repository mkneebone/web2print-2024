// Get references to the zoom buttons and flex boxes
const zoomButton = document.getElementById('zoom-button');
const zoomOutButton = document.getElementById('zoomOutButton');
const flexBoxes = document.getElementById('flex-boxes');

// Initialize the zoom level
let zoomLevel = 1;

// Event listener for the zoom in button
zoomButton.addEventListener('click', () => {
    zoomLevel += 0.1; // Adjust the zoom increment as needed
    flexBoxes.style.transform = `scale(${zoomLevel})`; // Apply zoom to flex boxes
});

// Event listener for the zoom out button
zoomOutButton.addEventListener('click', () => {
    if (zoomLevel > 0.1) { // Prevent zooming out too much
        zoomLevel -= 0.1; // Adjust the zoom decrement as needed
        flexBoxes.style.transform = `scale(${zoomLevel})`; // Apply zoom to flex boxes
    }
});

// SIDE BAR ----------------------------------------------------------------

const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('sidebar-toggle');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
});

// SHARE BUTTON -------------------------------------------------------------

function copyLink() {
    // Get the current page URL
    const url = window.location.href; 

    // Use the Clipboard API to copy the URL
    navigator.clipboard.writeText(url)
        .then(() => {
            alert('Link copied to clipboard!'); // Feedback message
        })
        .catch(err => {
            console.error('Error copying the link: ', err);
        });
}
