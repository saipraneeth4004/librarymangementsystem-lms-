const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validate username
  if (username === '') {
    alert('Username is required');
    return;
  }
  if (username.length > 10) {
    alert('Username must not exceed 10 characters');
    return;
  }

  // Validate password
  if (password === '') {
    alert('Password is required');
    return;
  }
  if (password.length > 6) {
    alert('Password must not exceed 6 characters');
    return;
  }
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
    alert('Password must contain at least one special character');
    return;
  }

  // If all validations pass, submit the form
  form.submit();
});