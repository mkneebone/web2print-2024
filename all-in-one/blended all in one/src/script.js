const button = document.querySelector(".button");
const blueberries = document.querySelectorAll(".blueberry");
const strawberries = document.querySelectorAll(".strawberry");
const peaches = document.querySelectorAll(".peach");

button.addEventListener("mouseenter", () => {
  button.classList.toggle("whitebackground");
});

button.addEventListener("mouseleave", ()=> {
  button.classList.toggle("pinkbackground");
});

button.addEventListener("mouseenter", ()=> {
  for (let i = 0; i < blueberries.length; i++) {
    blueberries[i].style.backgroundColor = "#3FFF10";
  }
});

button.addEventListener("click", ()=> {
  for (let i = 0; i < strawberries.length; i++) {
    strawberries[i].style.borderRadius = "50%";
  }
})

button.addEventListener("mouseleave", ()=> {
  for (let i = 0; i < blueberries.length; i++) {
    blueberries[i].style.backgroundColor = "blue";
  }
  for (let i = 0; i < strawberries.length; i++) {
    strawberries[i].style.borderRadius = "1%";
  }
   for (let i = 0; i < peaches.length; i++) {
    peaches[i].style.borderRadius = "1%";
  }
})

button.addEventListener("click", ()=> {
  for (let i = 0; i < peaches.length; i++) {
    peaches[i].style.borderRadius = "50%";
  }
})