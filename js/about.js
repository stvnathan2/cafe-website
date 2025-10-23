document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  const subtitle = document.querySelector(".subtitle");

  setTimeout(() => {
    title.style.opacity = 1;
    title.style.transform = "translateY(0)";
  }, 200);

  setTimeout(() => {
    subtitle.style.opacity = 1;
    subtitle.style.transform = "translateY(0)";
  }, 500);
});
