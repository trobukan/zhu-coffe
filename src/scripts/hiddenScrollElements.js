const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-el");
    }
  })
})

const hiddenElements = document.querySelectorAll(".hidden-el")
hiddenElements.forEach((el) => observer.observe(el))