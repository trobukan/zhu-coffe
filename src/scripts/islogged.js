const isLogged = window.localStorage.getItem("isLogged");

const lists = [
  document.querySelector(".nav-signup"),
  document.querySelector(".nav-login"),
  document.querySelector(".nav-logout")
]

if (isLogged) {
  lists.forEach((list) => {
    list.classList.add("is-user")
  })
} else {
  lists.forEach((list) => {
    list.classList.remove("is-user")
  })
}

/**@type {HTMLLIElement} */
const navLogout = document.querySelector(".nav-logout");

navLogout.addEventListener(("click"), () => {
  localStorage.removeItem("isLogged")
  location.reload();
})