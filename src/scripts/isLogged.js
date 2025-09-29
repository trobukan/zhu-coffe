const isLogged = window.localStorage.getItem("isLogged");

const lists = [
  document.querySelector(".nav-signup"),
  document.querySelector(".nav-login"),
  document.querySelector(".nav-logout")
]

if (isLogged) {
  lists.forEach(list => list?.classList.add("is-user"));

  /** Restringir o acesso do usuário caso tente entrar no /login e /signup enquanto estar logado */
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const restrictedPaths = ["/login", "/signup"];
  if (restrictedPaths.includes(currentPath)) {
    window.location.href = "/";
  }
} else {
  lists.forEach(list => list?.classList.remove("is-user"));
}

/**@type {HTMLLIElement} */
const navLogout = document.querySelector(".nav-logout");

navLogout?.addEventListener(("click"), () => {
  localStorage.removeItem("isLogged")
  window.location.href = "/";
})

