var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor((Math.random() * 100) + 1);
  var item = {};
  item[itemName] = itemPrice;
  cart.push(item);
  console.log(itemName + " has been added to your cart.");
  return cart;
}

function viewCart() {
  var toPrint = [];
  var l = cart.length;
  for (var i = 0; i < l; i++) {
    var item = Object.keys(cart[i]);
    var price = cart[i][item];
    toPrint.push(item + " at $" + price);
  } if (l === 0) {
    console.log("Your shopping cart is empty.");
  } else if (l <= 2 ) {
    console.log("In your cart, you have " + toPrint.join(" and ") + ".");
  } else if (l >= 3 ) {
    var items = toPrint.slice(0, (toPrint.length - 1));
    console.log("In your cart, you have " + items.join(", ") + ", and " + toPrint.pop() + ".");
  } 
}

function total() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
  var item = Object.keys(cart[i]);
  var price = cart[i][item];
  total += price;
  }
  return total;
} 

function removeFromCart(item) {
  if (!item) {
    console.log("That item is not in your cart.");
  } else { 
    var remove =  Object.keys(cart[remove]);
    
  }  
}

function placeOrder(cardNumber) {
  // write your code here
}


  // loop over our cart and for every item
 // create the string ${item} at ${price}
 // save it somewhere (maybe an array?)
 
 // join(' - ') function
 // array ['cat', 'dog', 'ocelot']
 // array.join(' - ') => "cat - dog - ocelot"
 //[ ${item} at ${price}, ${item} at ${price}, ${item} at ${price}]
 
 // object = {banana: 12}
 // object.banana or object["banana"] => 12
 // cart[0] = object
 // var keys = Object.keys(cart[0]); => ["banana"]
 // item = keys[0] => "banana"
 // price = object[key] => '12'
 
