let price = document.getElementById("price");
let discount = document.getElementById("discount");
let total = document.getElementById("total");

let price1 = document.getElementById("bagPrice");
let op = document.getElementById("opt");
price.innerHTML = `Rs.3050`;
discount.innerHTML = `Rs.1372.5`;
total.innerHTML = `Rs.1677.5`;
let dis2 = 1372.5;
let val1 = 3050;
let to = 1677.5;
op.onchange = function () {
  let x = op.value;
  price1.innerHTML = `Rs.${x * 3050}`;

  price.innerHTML = `Rs.${x * 3050}`;

  discount.innerHTML = `Rs.${x * 1372.5}`;
  let val = `${x * 3050}`;
  let dis = `${x * 1372.5}`;
  dis2 = x * 1372.5;
  val1 = x * 3050;
  to = val1 - dis;
  total.innerHTML = `Rs.${val - dis}`;
};

function couponApply() {
  let coupon = document.getElementById("text3").value;
  if (coupon === "masai30") {
    discount.innerHTML = dis2 - 100;
    total.innerHTML = to - 100;
  }
}

function goToCart() {
  alert("ITEM ADDED TO CART");
}
function delevery() {
  window.location.href = "delivery.html";
}
