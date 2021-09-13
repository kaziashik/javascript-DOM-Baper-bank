document.getElementById('login-btn').addEventListener('click', function () {
    //get user  emaill
    const emailField = document.getElementById('user-email');

    const userEmail = emailField.value;



    //get user password
    const passwordField = document.getElementById('user-password');

    const userPassword = passwordField.value;

    //check email and password

    if (userEmail == 'kazia096@gmail.com' && userPassword == 'ashik') {
        window.location.href = 'banking.html';

    }



})