document.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  const header = document.querySelector(".p-blog__header");

  scrollPosition > 80
    ? header.classList.add("scroll")
    : header.classList.remove("scroll");
});
