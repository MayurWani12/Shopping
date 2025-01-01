


document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const productCards = document.querySelectorAll('.product-card'); // Select all product cards in the grid

    // Function to filter products based on the search term
    function filterProducts(searchTerm) {
        searchTerm = searchTerm.toLowerCase();  // Make search term lowercase for case-insensitive comparison
        let matches = [];

        productCards.forEach(productCard => {
            const productName = productCard.querySelector('.product-name').textContent.toLowerCase(); // Get product name
            if (productName.includes(searchTerm)) {
                matches.push(productCard);  // Add matching product card to array
                productCard.style.display = 'block';  // Show matching product
            } else {
                productCard.style.display = 'none';  // Hide non-matching product
            }
        });

        displaySearchResults(matches, searchTerm);  // Show filtered results in the search results section
    }

    // Function to display search results
    function displaySearchResults(matches, searchTerm) {
        searchResults.innerHTML = '';  // Clear previous search results

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
                    searchResults.innerHTML = '';  // Clear search results after clicking on a result
                });

                searchResults.appendChild(listItem);
            });
        }
    }

    // Event listener for the search input
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.trim();  // Get the search term
        if (searchTerm === '') {
            // Show all products if search term is empty
            productCards.forEach(productCard => {
                productCard.style.display = 'block';
            });
            searchResults.innerHTML = '';  // Clear search results if input is empty
        } else {
            // Filter products based on search term
            filterProducts(searchTerm);
        }
    });
});










// document.addEventListener("DOMContentLoaded", function () {
//     const searchInput = document.getElementById("searchInput");
//     const searchResults = document.getElementById("searchResults");
//     const productGrid = document.getElementById("productGrid"); // Grid where product cards will be displayed
//     let productData = []; // Store product data fetched from the backend

//     // Static products for debugging
//     productData = [
//         { id: 1, name: "Product 1", image: "product1.jpg", price: 10 },
//         { id: 2, name: "Product 2", image: "product2.jpg", price: 20 }
//     ];

//     // Function to render products in the grid
//     function renderProducts(products) {
//         productGrid.innerHTML = ""; // Clear the grid before rendering

//         products.forEach((product) => {
//             const productCard = document.createElement("div");
//             productCard.classList.add("product-card");
//             productCard.innerHTML = `
//                 <img src="${product.image}" alt="${product.name}" class="product-image">
//                 <h3 class="product-name">${product.name}</h3>
//                 <p class="product-price">$${product.price}</p>
//             `;
//             productGrid.appendChild(productCard);
//         });
//     }

//     // Function to filter products based on the search term
//     function filterProducts(searchTerm) {
//         searchTerm = searchTerm.toLowerCase(); // Make search term lowercase for case-insensitive comparison
//         let matches = productData.filter((product) =>
//             product.name.toLowerCase().includes(searchTerm)
//         );

//         renderProducts(matches); // Re-render only the filtered products
//         displaySearchResults(matches, searchTerm); // Show filtered results in the search results section
//     }

//     // Function to display search results
//     function displaySearchResults(matches, searchTerm) {
//         searchResults.innerHTML = ""; // Clear previous search results

//         if (matches.length === 0) {
//             searchResults.innerHTML = `<p>No results found for "${searchTerm}"</p>`;
//         } else {
//             matches.forEach((match) => {
//                 const listItem = document.createElement("div");
//                 listItem.innerHTML = `
//                     <img src="${match.image}" alt="${match.name}" style="width: 50px; height: 50px;"> ${match.name}
//                 `;
//                 listItem.classList.add("search-result-item");

//                 // Scroll to the product in the grid when a search result is clicked
//                 listItem.addEventListener("click", function () {
//                     const productCard = Array.from(productGrid.children).find(
//                         (card) =>
//                             card.querySelector(".product-name").textContent === match.name
//                     );
//                     if (productCard) {
//                         productCard.scrollIntoView({
//                             behavior: "smooth",
//                             block: "center",
//                         });
//                     }
//                     searchResults.innerHTML = ""; // Clear search results after clicking on a result
//                 });

//                 searchResults.appendChild(listItem);
//             });
//         }
//     }

//     // Event listener for the search input
//     searchInput.addEventListener("input", function () {
//         const searchTerm = searchInput.value.trim(); // Get the search term
//         if (searchTerm === "") {
//             // Show all products if search term is empty
//             renderProducts(productData);
//             searchResults.innerHTML = ""; // Clear search results if input is empty
//         } else {
//             // Filter products based on search term
//             filterProducts(searchTerm);
//         }
//     });

//     // Render initial static products
//     renderProducts(productData);

//     // Uncomment this to fetch products dynamically
//     // fetchProducts();
// });
