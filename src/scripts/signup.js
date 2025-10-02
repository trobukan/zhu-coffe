const form = document.querySelector("form");
const errorMessageElement = document.querySelector(".error-message");

function displayError(message) {
  errorMessageElement.textContent = message; 
  errorMessageElement.style.display = "block"; 
}

function clearError() {
  errorMessageElement.textContent = "";
  errorMessageElement.style.display = "none";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearError();

  const email = form.querySelector('input[name="email"]').value.trim();
  const password = form.querySelector('input[name="password"]').value.trim();
  const confirmPassword = form.querySelector('input[name="confirm-password"]').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    displayError("Por favor, digite um e-mail válido!");
    return;
  }

  if (password.length < 4) {
    displayError("A senha é muito curta! Use 4 ou mais caracteres.");
    return;
  }

  if (password !== confirmPassword) {
    displayError("As senhas digitadas não coincidem!");
    return;
  }

  const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");

  const accountExists = accounts.some(acc => acc.email === email);
  if (accountExists) {
    displayError("Esta conta já existe em nosso sistema!");
    return;
  }

  accounts.push({ email, password });
  localStorage.setItem("accounts", JSON.stringify(accounts));
  localStorage.setItem("isLogged", "true");

  window.location.href = "/";
});