let number = 0;
const stamps = [
  "circles.svg",
  "heart.svg",
  "moon.svg",
  "rainbow.svg",
  "shooting-star.svg",
  "waves.svg",
];

const stampsTag = document.querySelector(".p-blog__stamps");

const addStamp = (pageX, pageY) => {
  // <img src="circles.svg">
  const img = document.createElement("img");
  img.setAttribute("src", `assets/${stamps[number]}`);

  // remove half the window width
  img.style.left = pageX - window.innerWidth / 2 + "px";
  img.style.top = pageY + "px";

  stampsTag.appendChild(img);

  // add some audio
  const audio = document.createElement("audio");
  audio.setAttribute("src", "assets/plop.mp3");
  audio.play();

  number = number + 1;
  if (number > stamps.length - 1) {
    number = 0;
  }
};

document.addEventListener("click", (event) => {
  addStamp(event.pageX, event.pageY);
});
