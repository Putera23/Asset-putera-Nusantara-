const loginForm = document.getElementById("login-form");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

const defaultEmail = "user@example.com";
const defaultPassword = "nature123";

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from reloading

  let valid = true;

  // Reset error messages and styles
  emailError.style.display = "none";
  passwordError.style.display = "none";
  emailField.classList.remove("error");
  passwordField.classList.remove("error");

  // Validate email
  if (emailField.value !== defaultEmail) {
    valid = false;
    emailError.style.display = "block";
    emailError.textContent = "Invalid email address.";
    emailField.classList.add("error");
  }

  // Validate password
  if (passwordField.value !== defaultPassword) {
    valid = false;
    passwordError.style.display = "block";
    passwordError.textContent = "Incorrect password.";
    passwordField.classList.add("error");
  }

  // Redirect to another website if valid
  if (valid) {
    alert("Login successful! Redirecting...");
    window.location.href = "https://sma1sukodono.mediadidik.com/u/account/notifications/0e7dfd2d-a48c-43c3-901e-b2a867d2566d"; // Ganti dengan URL tujuan Anda
  }
});