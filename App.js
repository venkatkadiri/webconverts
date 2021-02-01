/*const sections = document.querySelectorAll("section");
const squre = document.querySelector(".squre");
const Navbar = document.querySelector(".Navbar");
const options = {
  threshold: 0.7,
};
let observer = new IntersectionObserver(navCheck, options);
sections.forEach((section) => {
  observer.observe(section);
});

function navCheck(entries) {
  entries.forEach((entry) => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page = ${className}]`);
    const cordinates = activeAnchor.getBoundingClientRect();
    const direction = {
      height: cordinates.height,
      width: cordinates.width,
    };
    if (entry.isIntersecting) {
      let currentActive = document.querySelector(".Navbar a.active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }
      let newActive = document.querySelector(
        `.Navbar a[href="#${entry.target.getAttribute("id")}"]`
      );
      const links = document.querySelector(".tabs");

      newActive.classList.add("active");
      links.style.transform = `translateX(-${direction.width}px)`;

      //Navbar.style.trasform = `translateX(-${direction.width})`;
    }
    if (window.innerWidth < 1434) {
      const newWidth = (window.innerWidth / 1434) * 100;
      resposiveHeader = document.querySelector("#tabs");
      resposiveHeader.style.width = `${newWidth}%`;
      resposiveHeader.classList.add("overflow");
      resposiveHeader.style.overflow = "auto";
    }
  });
}*/
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
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page = ${className}]`);
    const cordinates = activeAnchor.getBoundingClientRect();
    const direction = {
      height: cordinates.height,
      width: cordinates.width,
    };
    if (entry.isIntersecting) {
      var currentActive = document.querySelector(".Navbar a.active");
      if (currentActive) {
        currentActive.classList.remove("active");
      }
      let newActive = document.querySelector(
        `.Navbar a[href="#${entry.target.getAttribute("id")}"]`
      );
      newActive.classList.add("active");

      if (window.innerWidth < 1434) {
        const newWidth = (window.innerWidth / 1434) * 100;
        const resposiveHeader = document.querySelector("#tabs");

        resposiveHeader.style.width = `${newWidth}%`;
        resposiveHeader.classList.add("overflow");
        resposiveHeader.style.overflow = "auto";
      }
    }
  });
}
