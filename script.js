/**
 * First Item Increment
 */
const item1Increment = document.getElementById('item1Increment');

item1Increment.addEventListener('click', function() {
  const product1 = singleItemIncrement('quantity1', 500);

  document.getElementById('price1').innerText = product1;

  totalCalculations();
});

/**
 * First Item Decrement
 */
const item1Decrement = document.getElementById('item1Decrement');
item1Decrement.addEventListener('click', function() {
  const product1 = singleItemDecrement('quantity1', 500);

  document.getElementById('price1').innerText = product1;

  totalCalculations();
});

/**
 * Second Item Increment
 */
const item2Increment = document.getElementById('item2Increment');

item2Increment.addEventListener('click', function() {
  const product2 = singleItemIncrement('quantity2', 50);

  document.getElementById('price2').innerText = product2;

  totalCalculations();
});

/**
 * Second Item Decrement
 */
const item2Decrement = document.getElementById('item2Decrement');
item2Decrement.addEventListener('click', function() {
  const product2 = singleItemDecrement('quantity2', 50);

  document.getElementById('price2').innerText = product2;

  totalCalculations();
});

/**
 * First Item Remove
 */
const icon1 = document.getElementById('icon1');
icon1.addEventListener('click', function() {
  document.getElementById('price1').innerText = 0;

  itemRemove('cartItem1');
  totalCalculations();
});

/**
 * Second Item Remove
 */
const icon2 = document.getElementById('icon2');
icon2.addEventListener('click', function() {
  document.getElementById('price2').innerText = 0;

  itemRemove('cartItem2');
  totalCalculations();
});

/**
 * Single Item Increment
 */
function singleItemIncrement(id, price) {
  const quantity = document.getElementById(id).value;
  const quantityNumber = parseFloat(quantity);
  const totalQuantity = quantityNumber + 1;
  document.getElementById(id).value = totalQuantity;

  const totalPrice = totalQuantity * price;

  return totalPrice;
}

/**
 * Single Item Decrement
 */
function singleItemDecrement(id, price) {
  const quantity = document.getElementById(id).value;
  const quantityNumber = parseFloat(quantity);
  const totalQuantity = quantityNumber - 1;
  document.getElementById(id).value = totalQuantity;

  const totalPrice = totalQuantity * price;

  return totalPrice;
}

/**
 * Item Remove
 */
function itemRemove(id) {
  const cartItem = document.getElementById(id);
  cartItem.style.display = 'none';

  return cartItem;
}

/**
 * Total Calculations
 */
function totalCalculations() {
  const subtotal1 = document.getElementById('price1').innerText;
  const subtotal1Number = parseFloat(subtotal1);

  const subtotal2 = document.getElementById('price2').innerText;
  const subtotal2Number = parseFloat(subtotal2);

  const subtotal = subtotal1Number + subtotal2Number;

  const tax = subtotal * 0.15;
  const output = subtotal + tax;

  document.getElementById('subtotal').innerText = subtotal;
  document.getElementById('tax').innerText = tax;
  document.getElementById('total').innerText = output;
}

// Check Out Success just for fun
const checkout = document.getElementById('checkout');
checkout.addEventListener('click', function() {
  document.getElementById('checkout-success').style.display = 'block';
  // document.getElementById('cart-area').style.display = 'none';

  // w3school scroll to top
  window.scrollTo(0, 0);
});
