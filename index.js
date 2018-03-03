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
  for (var i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]);
    var price = cart[i][item];
    toPrint.push(item + " at $" + price);
  } if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  } else if (cart.length <= 2 ) {
    console.log("In your cart, you have " + toPrint.join(" and ") + ".");
  } else if (cart.length >= 3 ) {
    var items = toPrint.slice(0, (toPrint.length - 1));
    console.log("In your cart, you have " + items.join(", ") + ", and " + toPrint.pop() + ".");
  } 
}
  /* 
  if (cart.length === 0) {
   console.log("Your shopping cart is empty.");
 } else if (cart.length <= 2) {
   for (var i = 0; i < cart.length; i++) {
     var item = Object.keys(cart[i]);
     var price = cart[i][item];
       toPrint.push(item + " at $" + price);
  }
  console.log("In your cart, you have " + toPrint.join(" and ") + ".");
  } else if (cart.length > 2) {
     var lastItem = Object.keys(cart[l - 1]);
     var lastPrice = cart[l][lastItem];
   for (var p = 0; p < cart.length - 1 ; p++) {
     var items = Object.keys(cart[p]);
     var prices = cart[p][items];
     toPrint.push(items + " at $" + prices);
  }
  console.log("In your cart, you have " + toPrint.join(", ") + " and " + lastItem + " at $" + lastPrice + ".");
  }
}*/

 // " and " + Object.keys(cart(cart.length-1)) + " at " + Object.values(cart(cart.length-1))
 
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
 

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
