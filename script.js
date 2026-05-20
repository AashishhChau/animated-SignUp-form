const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Email Regex
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Password Regex
  // Minimum 8 chars
  // At least 1 uppercase
  // At least 1 lowercase
  // At least 1 number
  // At least 1 special character

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Name Validation
  if (name === "") {
    showMessage("Please enter your name", "red");
    return;
  }

  // Email Validation
  if (!emailRegex.test(email)) {
    showMessage("Invalid email address", "red");
    return;
  }

  // Password Validation
  if (!passwordRegex.test(password)) {
    showMessage(
      "Password must contain 8 characters, uppercase, lowercase, number & special character",
      "red"
    );
    return;
  }

  // Success Message
  showMessage("Account Created Successfully 🎉", "lightgreen");

  // Reset Form
  form.reset();
});


// Function for Message
function showMessage(text, color) {

  message.innerText = text;
  message.style.color = color;

  message.classList.add("show");

  setTimeout(() => {
    message.classList.remove("show");
  }, 4000);
}