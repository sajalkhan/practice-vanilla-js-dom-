let pageNumber = 0;

const pages = [
  {
    text: "a Brooklyn-based graphic designer",
    background: "#edc7a9",
    circle: "#3e78ed",
  },
  {
    text: "Kanye West's biggest fan",
    background: "#a1fffe",
    circle: "#e34a47",
  },
  {
    text: "looking for a job at the start of October",
    background: "#d3c7f3",
    circle: "#f7fe00",
  },
  {
    text: `letting you <a href="pdf.pdf">download her PDF</a>`,
    background: "#faffb8",
    circle: "#b472e6",
  },
];

const nextPage = document.querySelector(".p-container__footer--next");
const prevPage = document.querySelector(".p-container__footer--prev");
const randomPage = document.querySelector(".p-container__footer--random");
const circle = document.querySelector(".p-container__circle");
const bodyText = document.querySelector("h2");
const body = document.querySelector("body");

const updateContent = (type) => {
  switch (type) {
    case "next":
      pageNumber += 1;
      break;
    case "prev":
      pageNumber -= 1;
      break;
    case "random":
      pageNumber = Math.floor(Math.random() * pages.length);
      break;
  }

  if (pageNumber > pages.length - 1) pageNumber = 0;
  if (pageNumber < 0) pageNumber = pages.length - 1;

  body.style.background = pages[pageNumber].background;
  circle.style.background = pages[pageNumber].circle;
  bodyText.innerHTML = pages[pageNumber].text;
};

nextPage.addEventListener("click", () => updateContent("next"));
prevPage.addEventListener("click", () => updateContent("prev"));
randomPage.addEventListener("click", () => updateContent("random"));

document.addEventListener("keyup", (event) => {
  if (event.key == "ArrowRight") updateContent("next");
  if (event.key == "ArrowLeft") updateContent("prev");
});
