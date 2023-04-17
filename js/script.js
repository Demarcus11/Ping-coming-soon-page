const emailInputField = document.querySelector(".ping-input"),
  errorMessage = document.querySelector(".error-message"),
  form = document.querySelector(".ping-form");

function validEmail() {
  const email = emailInputField.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // If test returns false show error styles else show normal styles
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Please provide a valid email address";
    emailInputField.style.borderColor = "red";
    emailInputField.placeholder = "example@email/com";
    return false;
  } else {
    errorMessage.textContent = "";
    emailInputField.style.borderColor = "hsl(223, 87%, 63%)";
    return true;
  }
}

emailInputField.addEventListener("blur", function () {
  const email = emailInputField.value.trim();
  // If user clicks off the input when its empty show normal styles
  if (email === "") {
    errorMessage.textContent = "";
    emailInputField.style.borderColor = "hsl(223, 87%, 63%)";
    emailInputField.placeholder = "Your email address";
  }
});

form.addEventListener("submit", function (e) {
  if (validEmail()) {
    // Submit form
  } else {
    // Prevent form from submitting
    e.preventDefault();
  }
});
