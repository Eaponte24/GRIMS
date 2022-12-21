const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#").value.trim();
    const password = document.querySelector("#").value.trim();
  
    if (username && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to log in");
      }
    }
  };
  
  document.querySelector("#").addEventListener("submit", loginFormHandler);