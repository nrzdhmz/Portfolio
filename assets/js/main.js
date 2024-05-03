// HEADER OPENING

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");

  burger.addEventListener("click", function () {
    nav.classList.toggle("open"); 
  });
});

// BURGER

document.querySelector(".burger").addEventListener("click", function () {
  this.classList.toggle("open");
});
