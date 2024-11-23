const nameInput = document.querySelector('#name');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const name = nameInput.value.trim();
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const nameRegex = /^[A-Za-z ]{2,30}$/;
    if (!nameRegex.test(name)) {
        alert('Invalid name. Please enter a valid name.');
        return;
    }

    const usernameRegex = /^[A-Za-z ]{2,30}$/;
    if (!usernameRegex.test(username)) {
        alert('Invalid username. Please enter a valid username.');
        return;
    }

    const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email. Please enter a valid email.');
        return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    if (!passwordRegex.test(password)) {
        alert('Invalid password. Please enter a strong password.');
        return;
    }
    
    form.submit();
}