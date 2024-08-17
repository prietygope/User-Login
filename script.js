function checkLogin() {
    const correctUsername = "admin";
    const correctPassword = "password123";
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    if(username === correctUsername && password === correctPassword) {
        message.textContent = "Login successful!";
        message.style.color = "green";
    } else {
        message.textContent = "Login failed!";
        message.style.color = "red";
    }
}