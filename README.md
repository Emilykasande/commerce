* Commerce
A simple commerce project showcasing the JavaScript knowledge  acquired so far ,html for frame work and css for styling.

* Introduction
This project simulates a basic online store.
It demonstrates product listing, shopping cart, and checkout features using only HTML, CSS, and JavaScript.
The main goal was to strengthen my JavaScript skills by building interactive and dynamic web functionality.

* Features
- Clean and modular codebase
- Product listing and shopping cart functionality
- Dynamic checkout process
- User-friendly interface
- Extendable for future improvements

* Technologies Used
- JavaScript for making the website interactive.
- HTML for frame work and CSS for styling.
- Git & GitHub for version control

* JavaScript Highlights
- DOM Manipulation: dynamically render products and update the shopping cart in real-time  
- Event Handling: button clicks like Add to Cart, Remove from Cart, Checkout and form submissions  
- Reusable Functions: structured code into small, clear functions for adding or removing items and updating totals  
- Array Methods: like map, filter, reduce ;These efficiently manage and calculate product or cart data  
- LocalStorage: persist cart items across page reloads that is if implemented.  
- Modular Code Structure: separated concerns to make the project readable and maintainable  

* Project Structure
commerce/
+ index.html # Entry point
+ style.css # Styling
+ script.js # JavaScript logic
+ README.md # Documentation

* Example JavaScript Snippet.
// Add product to cart
function addToCart(product) {
  cart.push(product);
  updateCartUI();
}

// Update cart display
function updateCartUI() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent =
    cart.reduce((sum, item) => sum + item.price, 0);
}
These snippets shows how I used functions, DOM updates, and array methods to manage cart interactions.

🛒shopping cart for moyondo wood and furniture.

=>I have learnt DOM manipulation and event-driven programming
=>Practiced using array methods to process and display dynamic data
=>Learned how to organize modular, reusable code
=>Understood how to use localStorage for persistence

* Future Improvements
Add login(signup) system with authentication,Connect to a database for real product storage and Implement payment gateway integration.
