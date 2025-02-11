document.addEventListener('DOMContentLoaded', function () {

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submitButton');
const emailError = document.getElementById('emailError');
  
    
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
  

function validateForm() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
  
      // Validação do email
    if (!validateEmail(email)) {
        emailError.style.display = 'block';
        submitButton.disabled = true;
    } else {
        emailError.style.display = 'none';
    }
  
      // Validação da senha
    if (password.length === 0) {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
      }
}
  
   
emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
  
    
document.getElementById('loginForm').addEventListener('submit', function (event) {
      validateForm();
    if (submitButton.disabled) {
        event.preventDefault();
    }
    });
});