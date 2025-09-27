document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = form.querySelector('input[name="email"]').value.trim();
    const password = form.querySelector('input[name="password"]').value.trim();
    const confirmPassword = form.querySelector('input[name="confirm-password"]').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Digite um e-mail válido!");
      return;
    }

    if (password.length < 4) {
      alert("Senha muito curta!");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");

    const accountExists = accounts.some(acc => acc.email === email);
    if (accountExists) {
      alert("Esta conta já existe!");
      return;
    }

    accounts.push({ email, password });
    localStorage.setItem("accounts", JSON.stringify(accounts));
    localStorage.setItem("isLogged", "true");

    window.location.href = "/";
  });
});
