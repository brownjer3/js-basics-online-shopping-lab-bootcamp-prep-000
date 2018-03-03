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
  for (i = 0; i < cart.length; i++) {
    var item = Object.keys(cart[i]);
    var price = cart[i][item];
    toPrint.push(item + " at $" + price);
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
 
 
 /* else if (cart.length == 1) {
   toPrint += Object.keys(cart[0]);
   toPrint += " at $" + Object.values(cart[0]) + ".";
   console.log(toPrint);
 } else if (cart.length == 2) {
   toPrint += Object.keys(cart[0]);
   toPrint += " at $" + Object.values(cart[0]);
   toPrint += " and " + Object.keys(cart[1]);
   toPrint += " at $" + Object.values(cart[1]) + ".";
   console.log(toPrint);
 } else if (cart.length >= 3) {
   var lastItem = Object.keys(cart[(cart.length-1)]);
   var lastPrice = Object.values(cart[(cart.length-1)]);
   
   // sort of like this
   for (var i = 0; i < cart.length-1; i++) {
   toPrint += Object.keys(cart[i]) + " at $" + Object.values(cart[i]) + ",";
    }
    console.log(toPrint + " and " + lastItem + " at $" + lastPrice + ".");
  } 
} */
 
 
 /* else if (cart.length == 1) { 
    toPrint += Object.keys(cart[0])[0];
    toPrint += " at $" + Object.values(cart[0])[0] + ".";
    console.log(toPrint);
  } else if (cart.length == 2) {
    for (var i = 0; i < cart.length-1 ; i++) {
    toPrint += Object.keys(cart[i])[0];
    toPrint += " at $" + Object.values(cart[i])[0] + " and ";
    }
    toPrint += Object.keys(cart[1])[0] + " at " + Object.values(cart[1])[0] + ".";
    console.log(toPrint);
  } */

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
