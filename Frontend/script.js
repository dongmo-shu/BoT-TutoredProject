document.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('focus', () => {
        input.placeholder = '';
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            switch (input.type) {
                case 'text':
                    input.placeholder = 'Full Name';
                    break;
                case 'email':
                    input.placeholder = 'Email Address';
                    break;
                case 'password':
                    input.placeholder = 'Password';
                    break;
            }
        }
    });
});

//This function ensures the input fields are not empty and meets the requirement
document.getElementById('continue-button').addEventListener('click', function() {
    const fullName = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const password = document.getElementById('password').value;
    const termsChecked = document.getElementById('terms').checked;
    if (!fullName) {
        alert('Full Name is required.');
    } else if (!email) {
        alert('Email Address is required.');
    } else if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
    } else if (!termsChecked) {
        alert('You must agree to the terms and conditions to continue.');
    } else {
        // Continue with the sign-up process
        alert('Sign-up successful!');
    }
});


