document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.querySelector('input[name="email"]').value.trim();
    const password = form.querySelector('input[name="password"]').value.trim();

    const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");

    const account = accounts.find(acc => acc.email === email && acc.password === password);

    if (!account) {
      alert("E-mail ou senha incorretos!");
      return;
    }

    localStorage.setItem("isLogged", "true");
    sessionStorage.setItem("email", email);

    window.location.href = "/";
  });
});
