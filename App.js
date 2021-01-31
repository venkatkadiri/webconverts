const sections = document.querySelectorAll("section");
const squre = document.querySelector(".squre");
const options = {
  threshold: 0.7,
};
let observer = new IntersectionObserver(navCheck, options);
sections.forEach((section) => {
  observer.observe(section);
});

function navCheck(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let currentActive = document.querySelector(".Navbar a.active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }
      let newActive = document.querySelector(
        `.Navbar a[href="#${entry.target.getAttribute("id")}"]`
      );
      newActive.classList.add("active");
    }
    if (window.innerWidth < 1434) {
      const newWidth = (window.innerWidth / 1434) * 100;
      resposiveHeader = document.querySelector("#tabs");
      resposiveHeader.style.width = `${newWidth}%`;
      resposiveHeader.classList.add("overflow");
      resposiveHeader.style.overflow = "auto";
    }
  });
}
