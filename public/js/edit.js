const editFormHandler = async (event) => {
    event.preventDefault();
  
    // these will have to change
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value.trim();
    
  
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
  
    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        post_id: id,
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector("").addEventListener("submit", editFormHandler);