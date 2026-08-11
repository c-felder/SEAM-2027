const b = document.querySelector(".menu-button");
const n = document.querySelector(".nav-links");

if (b && n) {
  b.addEventListener("click", () => {
    n.classList.toggle("open");

    b.setAttribute(
      "aria-expanded",
      n.classList.contains("open")
    );
  });
}
