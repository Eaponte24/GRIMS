const splash = document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();

  setTimeout(() => {
    splash.classList.add("display-none");
  }, 2000);
});

