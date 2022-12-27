const searchHandler = async (event) => {
    event.preventDefault();
  
    const search = document.querySelector('#search').value.trim();
  
    if (search) {
      const response =  await fetch(`/product/:${search}`, {
        method: 'GET',
      });
  
      if (response.ok) {
        console.log('search successful!');
        document.location.replace(`/product/${search}`);
      } else {
        alert(`Failed to search ${search}` );
      }
    }
  };
  
  document
    .querySelector('.search-form')
    .addEventListener('submit', searchHandler);