const carousel = document.querySelector('.carousel');
const cells = document.querySelectorAll('.carousel__cell');
const cellCount = cells.length;
let selectedIndex = 0;

// Sensitivity multiplier for mouse wheel scrolling
const sensitivity = 0.005;

function rotateCarousel() {
    const angle = selectedIndex / cellCount * -360;
    carousel.style.transform = `translateZ(-288px) rotateY(${angle}deg)`;
    updateVideos();
}

function updateVideos() {
    cells.forEach((cell, index) => {
        const video = cell.querySelector('video');
        if (index === (selectedIndex % cellCount + cellCount) % cellCount) {
            video.play();
        } else {
            video.pause();
            video.currentTime = 0;
        }
    });
}

let deltaYAccumulated = 0;

window.addEventListener('wheel', (event) => {
    deltaYAccumulated += event.deltaY * sensitivity;

    if (deltaYAccumulated > 1) {
        selectedIndex++;
        deltaYAccumulated = 0;
    } else if (deltaYAccumulated < -1) {
        selectedIndex--;
        deltaYAccumulated = 0;
    }

    rotateCarousel();
});

// Initial setup
updateVideos();