// function validateForm(){
//     let email = document.getElementById('email').value 
//     let password = document.getElementById('password').value
//     const emailvalidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!email.match(emailvalidation)){
//         alert('Please enter a valid email')
//         return false
//     }
//     const passvalidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;
//     if(!password.match(passvalidation)){
//         alert('Password must be at least 8 characters long')
//         return false
//     }
//     return true;
    
// }
// let vatel= document.createElement('label').innerHTML=' '   

// let emailInput = document.getElementById('email');
// let passwordInput = document.getElementById('password');
// let button = document.getElementById('button');

// function validateForm(){
//     let email = emailInput.value.trim()
//     let password = passwordInput.value.trim()

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if(!emailRegex.test(email)){
//         alert('Invalid email, Enter a valid email')
//         return;
//     }

//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
//     if(!passwordRegex.test(password)){
//         alert('Invalid passwors, Enter a stronger password')
//         return;
//     }
//     form.submit()
// }



let emailInput = document.getElementById('email');
let passwordInput = document.getElementById('password');
let button = document.getElementById('button');
let form = document.querySelector('.signin form');

function validateForm() {
    let email = emailInput.value.trim()
    let password = passwordInput.value.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email, Enter a valid email')
        return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/
    if (!passwordRegex.test(password)) {
        alert('Invalid password, Enter a stronger password')
        return;
    }
    form.submit();
}
