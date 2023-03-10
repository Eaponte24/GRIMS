const signupFormHandler = async (event) => {
  event.preventDefault();

  const email = document.getElementById("signup-email").value.trim();
  const password = document.getElementById("signup-password").value.trim();
  const passwordConfirm = document.getElementById("signup-confirm").value.trim();

  if (email && password) {
    if (password !== passwordConfirm) {
      alert("Passwords do not match");
    } else {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log("Success! Account Created");
        alert("Success! Account Created");
        document.location.replace("/");
      } else {
        alert("failed to signup");
      }
    }
  }
};

document
  .querySelector("#signupConfirm")
  .addEventListener("click", signupFormHandler);
