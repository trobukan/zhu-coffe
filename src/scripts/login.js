const form = document.querySelector("form");
const errorMessageElement = form.querySelector(".error-message");

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

  const accounts = JSON.parse(localStorage.getItem("accounts") || "[]");

  const account = accounts.find(acc => acc.email === email && acc.password === password);

  if (!account) {
    displayError("E-mail ou senha incorretos. Por favor, tente novamente!");
    return;
  }

  localStorage.setItem("isLogged", "true");
  sessionStorage.setItem("email", email);

  window.location.href = "/";
});