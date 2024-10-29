// Track the current position of patterns
let currentPosition = 0;
const BLOCK_WIDTH = 3.06; // Width of one block in vw units (2.8width+0.26gap)

// Get DOM elements
const patterns = document.querySelector('.grid-containerC');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');
const rotateButton = document.getElementById('rotateButton');
console.log('get rotateButton success');

// Add click handlers
rightArrow.addEventListener('click', () => {
    // Move patterns right by one block
    currentPosition += BLOCK_WIDTH;
    updatePatternPosition();
});

leftArrow.addEventListener('click', () => {
    // Move patterns left by one block
    currentPosition -= BLOCK_WIDTH;
    updatePatternPosition();
});

function updatePatternPosition() {
    // Apply the transform with vw units
    patterns.style.transform = `translateX(${currentPosition}vw)`;
}

function updatePatternPosition() {
  // Get the total width of the pattern container (all blocks)
  const totalPatternWidth = 53 * BLOCK_WIDTH; // 53 blocks in pattern width
  
  // If moved too far right, reset to start
  if (currentPosition >= 0) {
      currentPosition = -159.12;
  }
  
  // If moved too far left, reset to end
  if (currentPosition <= -totalPatternWidth) {
      currentPosition = 0;
  }
  
  // Apply the transform
  patterns.style.transform = `translateX(${currentPosition}vw)`;
}

// Keyboard handlers
document.addEventListener('keydown', function(event) {
    // Check for specific keys using event.key
    if (event.key === 'ArrowLeft') {
      // Handle left arrow key press
      console.log('Left arrow pressed');
      // Move patterns left by one block
      currentPosition -= BLOCK_WIDTH;
      updatePatternPosition();
    } else if (event.key === 'ArrowRight') {
      // Handle right arrow key press
      console.log('Right arrow pressed');
      // Move patterns right by one block
      currentPosition += BLOCK_WIDTH;
      updatePatternPosition();
    } 
    // Add more key handling as needed
  });

// Add this to ensure DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize pattern position
    updatePatternPosition();
});