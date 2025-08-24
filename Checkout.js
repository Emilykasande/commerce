const orderSummary = document.getElementById("order-summary");
const orderTotal = document.getElementById("order-total");

// Initialize cart in localStorage if empty
if (!localStorage.getItem("cart")) {
  localStorage.setItem(
    "cart",
    JSON.stringify([
      { name: "Chair", quantity: 2, price: 50000 },
      { name: "Table", quantity: 1, price: 150000 },
    ])
  );
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  orderSummary.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("order-item");
    div.innerHTML = `
            <div class="item-details">
                <p><strong>${item.name}</strong></p>
                <p>Price: UGX ${item.price}</p>
                <p class="item-quantity">
                    Quantity: 
                    <input type="number" min="1" value="${
                      item.quantity
                    }" data-index="${index}">
                </p>
                <p>Subtotal: UGX <span class="subtotal">${
                  item.price * item.quantity
                }</span></p>
            </div>
        `;
    orderSummary.appendChild(div);
    total += item.price * item.quantity;
  });

  orderTotal.textContent = `Total: UGX ${total}`;

  const inputs = document.querySelectorAll(".item-quantity input");
  inputs.forEach((input) => {
    input.addEventListener("change", (e) => {
      const idx = e.target.dataset.index;
      let value = parseInt(e.target.value);
      if (value < 1) value = 1;
      cart[idx].quantity = value;
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });
}

// Render cart on page load
renderCart();


