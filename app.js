// This file initializes the application and handles global functionalities and event listeners.

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    console.log('Application initialized');

    // Add event listeners for navigation links
    const productLink = document.getElementById('product-link');
    const cartLink = document.getElementById('cart-link');

    if (productLink) {
        productLink.addEventListener('click', () => {
            console.log('Navigating to products page');
        });
    }

    if (cartLink) {
        cartLink.addEventListener('click', () => {
            console.log('Navigating to cart page');
        });
    }
});