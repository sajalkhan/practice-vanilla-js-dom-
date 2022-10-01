const mainTag = document.querySelector(".p-plant");
const menu = document.querySelector(".p-plant__menu");
const nav = document.querySelector("nav");

const slideArea = document.querySelector(".p-plant__container--slides");
const images = slideArea.querySelectorAll("img");

let currentImage = 0;
let zIndx = 1;

menu.addEventListener("click", () => {
  mainTag.classList.toggle("open");

  if (mainTag.classList.contains("open")) {
    menu.innerHTML = `<img src="assets/close.svg"> Close`;
    nav.style.left = 0;
  } else {
    menu.innerHTML = `<img src="assets/menu.svg"> Menu`;
    nav.style.left = "-240px";
  }
});

slideArea.addEventListener("click", () => {
  zIndx++;
  currentImage++;

  // if(currentImage > images.length - 1) {
  //   currentImage = 0;
  // }
  currentImage = currentImage % images.length;
  images[currentImage].style.zIndex = zIndx;

  images.forEach((img) => img.classList.remove("displayed"));
  images[currentImage].classList.add("displayed");
});

slideArea.addEventListener("mouseover", () => {
  images.forEach((image) => {
    const x = 25 * Math.floor(Math.random() * 5) - 50;
    const y = 25 * Math.floor(Math.random() * 5) - 50;

    image.style.transform = `translate(${x}px, ${y}px)`;
  });
});

slideArea.addEventListener("mouseout", () => {
  images.forEach((image) => {
    image.style.transform = "";
  });
});
