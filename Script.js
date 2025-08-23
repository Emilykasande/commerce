// script.js
function addToCart(id, name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ id, name, price, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart!");
}

function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let tableBody = document.querySelector("#cart-table tbody");
  let total = 0;
  tableBody.innerHTML = "";

  cart.forEach((item, index) => {
    let itemTotal = item.price * item.quantity;
    total += itemTotal;
    tableBody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" 
                    onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button onclick="removeItem(${index})">Remove</button></td>
            </tr>
        `;
  });

  document.getElementById("cart-total").textContent =
    "Total: $" + total.toFixed(2);
}

function updateQuantity(index, quantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity = parseInt(quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// checkout.js
const orderSummary = document.getElementById("order-summary");
const orderTotal = document.getElementById("order-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;
cart.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("order-item");
    div.innerHTML = `
        <p>${item.name} x ${item.quantity} - UGX ${item.price * item.quantity}</p>
    `;
    orderSummary.appendChild(div);
    total += item.price * item.quantity;
});

orderTotal.textContent = total;

/