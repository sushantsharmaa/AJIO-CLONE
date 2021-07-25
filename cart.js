let price = document.getElementById("price");
let discount = document.getElementById("discount");
let total = document.getElementById("total");

let price1 = document.getElementById("bagPrice");
let op = document.getElementById("opt");
price.innerHTML = `Rs.1678`;
discount.innerHTML = `Rs.500`;
total.innerHTML = `Rs.1178`;
op.onchange = function () {
  let x = op.value;
  price1.innerHTML = `Rs.${x * 1678}`;

  price.innerHTML = `Rs.${x * 1678}`;

  discount.innerHTML = `Rs.${x * 500}`;
  let val = `${x * 1678}`;
  let dis = `${x * 500}`;
  total.innerHTML = `Rs.${val - dis}`;
};

function goToCart() {
  alert("ITEM ADDED TO CART");
}
function delevery() {
  window.location.href = "delivery.html";
}
