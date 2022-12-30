const editFormHandler = async (event) => {
  event.preventDefault();

  const productName = document.getElementById("pName").value.trim();
  const productPrice = document.getElementById("pPrice").value;
  const stockAmount = document.getElementById("pStock").value;

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch(`/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      product_name: productName,
      price: productPrice,
      stock: stockAmount,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    // alert that the product has been updated
    alert(`${productName} has been updated!`);
    // reload the page
    document.location.reload();
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector("#editConfirm")
  .addEventListener("click", editFormHandler);
