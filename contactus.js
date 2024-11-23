const nameInput = document.querySelector('#name');
const lastnameInput = document.querySelector('#lastname');
const emailInput = document.querySelector('#email');
const button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    validateForm();
});

function validateForm() {
    const name = nameInput.value.trim();
    const username = lastnameInput.value.trim();
    const email = emailInput.value.trim();

    const nameRegex = /^[A-Za-z ]{2,30}$/;
    if (!nameRegex.test(name)) {
        alert('Invalid name. Please enter a valid name.');
        return;
    }

    const lastnameRegex = /^[A-Za-z ]{2,30}$/;
    if (!lastnameRegex.test(lastname)) {
        alert('Invalid text');
        return;
    }

    const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email. Please enter a valid email.');
        return;
    }
    form.submit();
}