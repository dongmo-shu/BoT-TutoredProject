const passwordField = document.getElementById("password");
const togglePassword = document.querySelector(".password-toggle-icon i");

togglePassword.addEventListener("click", function () {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
  } else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
  }
});


//This function ensures the input fields are not empty and meets the requirement
document.getElementById('continue-button').addEventListener('click', function() {
    const email = document.querySelector('input[type="email"]').value;
    const password = document.getElementById('password').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regular expression for validating email

    if (!email) {
        alert('Email Address is required.');
    } else if (!emailPattern.test(email)) {
      alert('Please enter a valid Email Address.');
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
    } else {
        // Continue with the sign-up process
        alert('Sign-up successful!');
    }
});