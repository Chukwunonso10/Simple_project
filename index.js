// Handle outside click for modal close
var modal = document.getElementById('all');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Registration Form
    const registrationForm = document.getElementById("registrationform");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            // Get form input values
            const firstName = document.getElementById("name").value.trim();
            const lastName = document.getElementById("Lname").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phoneNo").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmpassword").value;

            // Validate form inputs
            if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
                alert("All fields are required.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            // Store user details in localStorage
            const user = {
                firstName,
                lastName,
                email,
                phone,
                password // Note: Never store plain passwords in real applications
            };

            localStorage.setItem("registeredUser", JSON.stringify(user));
            alert("Registration successful!");
            window.location.href = "index.html"; // Redirect to login page after registration
        });
    }

    // Login Form
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent default form submission

            // Get form input values
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            console.log("Login form submitted with email:", email);

            // Retrieve user details from localStorage
            const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
            console.log("Retrieved registered user:", registeredUser);

            // Check if the user exists and credentials match
            if (registeredUser && registeredUser.email === email && registeredUser.password === password) {
                alert(`Welcome back, ${registeredUser.firstName}!`);
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "home.html"; // Redirect to Forum page on successful login
            } else {
                alert("Invalid email or password.");
                console.log("Login failed: Invalid credentials.");
            }
        });
    }
});
