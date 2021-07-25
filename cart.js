let price = document.getElementById("price");
let discount = document.getElementById("discount");
let total = document.getElementById("total");

let price1 = document.getElementById("bagPrice");
let op = document.getElementById("opt");
price.innerHTML = `Rs.3050`;
discount.innerHTML = `Rs.1372.5`;
total.innerHTML = `Rs.1677.5`;
op.onchange = function () {
  let x = op.value;
  price1.innerHTML = `Rs.${x * 3050}`;

  price.innerHTML = `Rs.${x * 3050}`;

  discount.innerHTML = `Rs.${x * 1372.5}`;
  let val = `${x * 3050}`;
  let dis = `${x * 1372.5}`;
  total.innerHTML = `Rs.${val - dis}`;
};

function goToCart() {
  alert("ITEM ADDED TO CART");
}
function delevery() {
  window.location.href = "delivery.html";
}
