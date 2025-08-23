// checkout.js
const orderSummary = document.getElementById("order-summary");
const orderTotal = document.getElementById("order-total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;
cart.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("order-item");
  div.innerHTML = `
        <p>${item.name} x ${item.quantity} - UGX ${
    item.price * item.quantity
  }</p>
    `;
  orderSummary.appendChild(div);
  total += item.price * item.quantity;
});

orderTotal.textContent = total;

