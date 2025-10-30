const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginForm = document.querySelector('.form-box.login form');

registerLink.addEventListener('click', () => {
  logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
  logregBox.classList.remove('active');
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents the default form submission
  window.location.href = 'services.html'; // Redirects to the services page
});
