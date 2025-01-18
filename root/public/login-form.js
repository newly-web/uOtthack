const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User logged in: ", userCredential.user);
        alert("Login successful!");
    } catch (error) {
        console.error("Error logging in: ", error.message);
        alert("Error: " + error.message);
    }
});
