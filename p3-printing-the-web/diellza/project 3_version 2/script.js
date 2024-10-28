// Smooth version
const item1Container = document.querySelector("item-1-container");

window.addEventListener("scroll", () => {
	const scrollTop = window.scrollY;
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	const maxScrollableHeight = document.body.scrollHeight - windowHeight;

	const newLeft = (scrollTop / maxScrollableHeight) * (windowWidth - 50);

	itemContainer.style.left = `${Math.min(Math.max(newLeft, 0), windowWidth - 50)}px`;
}); 

const item2Container = document.querySelector("item-2-container");

window.addEventListener("scroll", () => {
	const scrollTop = window.scrollY;
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	const maxScrollableHeight = document.body.scrollHeight - windowHeight;

	const newLeft = (scrollTop / maxScrollableHeight) * (windowWidth - 50);

	itemContainer.style.left = `${Math.min(Math.max(newLeft, 0), windowWidth - 50)}px`;
}); 


const item3Container = document.querySelector("item-3-container");

window.addEventListener("scroll", () => {
	const scrollTop = window.scrollY;
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	const maxScrollableHeight = document.body.scrollHeight - windowHeight;

	const newLeft = (scrollTop / maxScrollableHeight) * (windowWidth - 50);

	itemContainer.style.left = `${Math.min(Math.max(newLeft, 0), windowWidth - 50)}px`;
}); 

const item4Container = document.querySelector("item-4-container");

window.addEventListener("scroll", () => {
	const scrollTop = window.scrollY;
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	const maxScrollableHeight = document.body.scrollHeight - windowHeight;

	const newLeft = (scrollTop / maxScrollableHeight) * (windowWidth - 50);

	itemContainer.style.left = `${Math.min(Math.max(newLeft, 0), windowWidth - 50)}px`;
}); 