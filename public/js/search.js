const searchHandler = async (event) => {
    event.preventDefault();
  
    const search = document.querySelector('#search').value.trim();
  
    if (search) {
      console.log(`search successful for ${search}`);
      const response =  fetch('/api/products', {
        method: 'GET',
        // body: JSON.stringify({ search }),
        // headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(`Failed to search ${search}` );
      }
    }
  };
  
  document
    .querySelector('.search-form')
    .addEventListener('submit', searchHandler);