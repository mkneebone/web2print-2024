// Smooth version
const greenContainer = document.getElementById("green-container");

window.addEventListener("scroll", () => {
		const scrollTop = window.scrollY;
		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;

		const maxScrollableHeight = document.body.scrollHeight - windowHeight;

		const newLeft = (scrollTop / maxScrollableHeight) * (windowWidth - 50);

		greenContainer.style.left = `${Math.min(Math.max(newLeft, 0), windowWidth - 50)}px`;
});

// Stepped version
// const movingElement = document.getElementById('green-container');

// const steps = 20;
// const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;

// window.addEventListener('scroll', () => {
// 	const scrollTop = window.scrollY; // Current vertical scroll position
// 	const windowWidth = window.innerWidth; // Width of the viewport

// 	const newLeft = Math.floor((scrollTop / maxScrollableHeight) * (steps - 1)) * (windowWidth - 50) / (steps - 1);

// 	movingElement.style.left = `${Math.min(Math.max(newLeft, 0), windowWidth - 200)}px`;
// });