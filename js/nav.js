
// duplicate declarations and listener removed (already defined above)

// highlight active page
const current = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
  if(link.getAttribute("href") === current){
    link.classList.add("active");
  }
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show");
});
