const signupFormHandler = async (event) => {
  event.preventDefault();

  // need to collect the selectors for the email and password
  const email = document.getElementById("").value.trim();
  const password = document.getElementById("").value.trim();

  if (email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("Success! Account Created");

      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

// need to collect the selector for the signup form
document.querySelector("").addEventListener("submit", signupFormHandler);
