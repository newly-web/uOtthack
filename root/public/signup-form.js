const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up: ", userCredential.user);
        alert("Sign-up successful!");
    } catch (error) {
        console.error("Error signing up: ", error.message);
        alert("Error: " + error.message);
    }
});
