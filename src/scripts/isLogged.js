const isLogged = window.localStorage.getItem("isLogged");

const navSignup = document.querySelectorAll(".nav-signup");
const navLogin = document.querySelectorAll(".nav-login");
const navLogout = document.querySelectorAll(".nav-logout");

const visibilityLists = [navSignup, navLogin, navLogout];

const toggleIsUserClass = (method) => {
  visibilityLists.forEach(list => {
    list.forEach(item => {
      item.classList[method]("is-user");
    });
  });
};

if (isLogged) {
  toggleIsUserClass("add");

  const currentPath = window.location.pathname.replace(/\/$/, "");
  const restrictedPaths = ["/entrar", "/cadastrar"];
  if (restrictedPaths.includes(currentPath)) {
    window.location.href = "/";
  }
} else {
  toggleIsUserClass("remove");
}

navLogout.forEach(item => {
  item.addEventListener("click", () => {
    localStorage.removeItem("isLogged");
    window.location.href = "/";
  });
});
