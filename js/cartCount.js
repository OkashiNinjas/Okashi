let navBarCart = document.getElementById("cart");
let local = JSON.parse(localStorage.getItem("products"));
if (local != null) {
  cartCounter.textContent = local.length;
}
