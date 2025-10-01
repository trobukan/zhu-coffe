const toggleNav = document.querySelector(".open-nav");
const closeNav = document.querySelector(".close-nav");
const navMobile = document.querySelector(".nav-mobile");

toggleNav?.addEventListener("click", (e) => {
  e.preventDefault()
  navMobile?.classList.remove("hidden"); 
});


closeNav?.addEventListener("click", (e) => {
  e.preventDefault()
  navMobile?.classList.add("hidden"); 
});