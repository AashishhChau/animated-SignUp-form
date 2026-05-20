const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirmPassword").value.trim();

  // Email Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Strong Password Regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  // Name check
  if (name === "") {
    return showMessage("Name is required", "red");
  }

  // Email check
  if (!emailRegex.test(email)) {
    return showMessage("Invalid email format", "red");
  }

  // Password check
  if (!passwordRegex.test(password)) {
    return showMessage(
      "Password must be 8+ chars with upper, lower, number & special character",
      "red"
    );
  }

  // Confirm password check
  if (password !== confirmPassword) {
    return showMessage("Passwords do not match", "red");
  }

  // Success
  showMessage("Account Created Successfully 🎉", "lightgreen");
  form.reset();
});

// message function
function showMessage(text, color) {
  message.innerText = text;
  message.style.color = color;
  message.classList.add("show");

  setTimeout(() => {
    message.classList.remove("show");
  }, 3000);
}