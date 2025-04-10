// This file manages the shopping cart functionalities, including adding items, removing items, and updating quantities.

let cart = [];

// Function to add an item to the cart
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Function to update the quantity of an item in the cart
function updateQuantity(productId, quantity) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity = quantity;
        if (product.quantity <= 0) {
            removeFromCart(productId);
        }
    }
    updateCartDisplay();
}

// Function to calculate the total price of the cart
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Function to update the cart display
function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.innerText = `${item.name} - Quantity: ${item.quantity} - Price: $${item.price}`;
        cartContainer.appendChild(itemElement);
    });
    const totalElement = document.getElementById('cart-total');
    totalElement.innerText = `Total: $${calculateTotal()}`;
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}