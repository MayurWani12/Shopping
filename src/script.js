


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const productCards = document.querySelectorAll('.product-card'); 


    function filterProducts(searchTerm) {
        searchTerm = searchTerm.toLowerCase();  
        let matches = [];

        productCards.forEach(productCard => {
            const productName = productCard.querySelector('.product-name').textContent.toLowerCase(); // Get product name
            if (productName.includes(searchTerm)) {
                matches.push(productCard); 
                productCard.style.display = 'block';  
            } else {
                productCard.style.display = 'none';  
            }
        });

        displaySearchResults(matches, searchTerm);  
    }


    function displaySearchResults(matches, searchTerm) {
        searchResults.innerHTML = ''; 

        if (matches.length === 0) {
            searchResults.innerHTML = `<p>No results found for "${searchTerm}"</p>`;
        } else {
            matches.forEach(match => {
                const listItem = document.createElement('div');
                const productName = match.querySelector('.product-name').textContent;
                const productImg = match.querySelector('img').src;

                listItem.innerHTML = `<img src="${productImg}" alt="${productName}" style="width: 50px; height: 50px;"> ${productName}`;
                listItem.classList.add('search-result-item');
                
                listItem.addEventListener('click', function() {
                    match.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    searchResults.innerHTML = '';  
                });

                searchResults.appendChild(listItem);
            });
        }
    }

   
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.trim();  
        if (searchTerm === '') {
            
            productCards.forEach(productCard => {
                productCard.style.display = 'block';
            });
            searchResults.innerHTML = '';  
        } else {
       
            filterProducts(searchTerm);
        }
    });
});








