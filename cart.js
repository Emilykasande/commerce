function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartTable = document.getElementById("cart-items");
  cartTable.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    let row = `
          <tr>
            <td>${item.name}</td>
            <td>${item.price.toLocaleString()}</td>
            <td>
              <input type="number" value="${
                item.qty
              }" min="1" class="form-control w-50 mx-auto" 
                onchange="changeQty(${index}, this.value)">
            </td>
            <td>${(item.price * item.qty).toLocaleString()}</td>
            <td><button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button></td>
          </tr>
        `;
    cartTable.innerHTML += row;
    subtotal += item.price * item.qty;
  });

  document.getElementById("subtotal").textContent = subtotal.toLocaleString();
  document.getElementById("total").textContent = subtotal.toLocaleString();
}

function changeQty(index, qty) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].qty = parseInt(qty);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function updateCart() {
  alert("Cart updated!");
  loadCart();
}

// Load cart on page ready
window.onload = loadCart;
