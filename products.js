const products = [
    {
        id: 1,
        name: "Tondeuse A",
        description: "Tondeuse électrique avec batterie longue durée.",
        price: 99.99,
        image: "assets/images/tondeuseA.jpg"
    },
    {
        id: 2,
        name: "Tondeuse B",
        description: "Tondeuse à gazon avec moteur puissant.",
        price: 129.99,
        image: "assets/images/tondeuseB.jpg"
    },
    {
        id: 3,
        name: "Tondeuse C",
        description: "Tondeuse manuelle, écologique et silencieuse.",
        price: 79.99,
        image: "assets/images/tondeuseC.jpg"
    }
];

function displayProducts() {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    // Logic to add the product to the shopping cart
    console.log(`Product ${productId} added to cart.`);
}

// Call the displayProducts function when the page loads
document.addEventListener('DOMContentLoaded', displayProducts);