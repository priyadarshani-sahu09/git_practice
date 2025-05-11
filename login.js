<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
    </style>
</head>
<body class="bg-gray-100 flex justify-center items-center h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form id="loginForm" class="space-y-4">
            <div>
                <label for="username" class="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input type="text" id="username" name="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your username" required>
            </div>
            <div>
                <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" id="password" name="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" required>
            </div>
            <div id="error-message" class="text-red-500 text-xs italic" style="display: none;"></div>
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">Login</button>
        </form>
        <p class="text-center text-gray-600 text-sm mt-4">Don't have an account? <a href="/register.html" class="text-blue-500 hover:text-blue-700 font-semibold">Register</a></p>
    </div>

    <script>
        const loginForm = document.getElementById('loginForm');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('error-message');

        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username === '' || password === '') {
                errorMessage.textContent = 'Please enter both username and password.';
                errorMessage.style.display = 'block';
                return;
            }

            // Simulate authentication (replace with your actual authentication logic)
            if (username === 'user' && password === 'password') {
                // Redirect to a success page or perform an action
                window.location.href = '/dashboard.html'; // Change to your desired page
            } else {
                errorMessage.textContent = 'Invalid credentials. Please try again.';
                errorMessage.style.display = 'block';
            }
        });
    </script>
</body>
</html>
