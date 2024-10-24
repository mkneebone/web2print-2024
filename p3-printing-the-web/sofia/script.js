// 1. Get HTML elements and designate a JS name
const strawberries = document.querySelectorAll(".strawberry");
const blueberries = document.querySelectorAll(".blueberry");
const avocados = document.querySelectorAll(".avocado");
const peaches = document.querySelectorAll(".peach");
const blending = document.querySelectorAll(".blender");

// Strawberry Function
strawberries.forEach(strawberry => {
  const text = strawberry.querySelector("h1");
  strawberry.addEventListener('mouseenter', () => {
  text.style.opacity = 1; // Show the text
});

  strawberry.addEventListener('mouseleave', () => {
    text.style.opacity = 0; // Hide the text
  });
});

// Blueberry Function
blueberries.forEach(blueberry => {
  const text = blueberry.querySelector("h1");
  blueberry.addEventListener('mouseenter', () => {
  text.style.opacity = 1; // Show the text
});

  blueberry.addEventListener('mouseleave', () => {
    text.style.opacity = 0; // Hide the text
  });
});

// Avocado Function
avocados.forEach(avocado => {
  const text = avocado.querySelector("h1");
  avocado.addEventListener('mouseenter', () => {
  text.style.opacity = 1; // Show the text
});

  avocado.addEventListener('mouseleave', () => {
    text.style.opacity = 0; // Hide the text
  });
});

// Peach Function
peaches.forEach(peach => {
  const text = peach.querySelector("h1");
  peach.addEventListener('mouseenter', () => {
  text.style.opacity = 1; // Show the text
});

  peach.addEventListener('mouseleave', () => {
    text.style.opacity = 0; // Hide the text
  });
});

// Blender Function
blending.forEach(blender => {
  const text = blender.querySelector("h1");
  blender.addEventListener('mouseenter', () => {
  text.style.opacity = 1; // Show the text
});

  blender.addEventListener('mouseleave', () => {
    text.style.opacity = 0; // Hide the text
  });
});