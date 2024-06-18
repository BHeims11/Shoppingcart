/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
const products = [
{
  name: "Cherry",
  price: 2.00,
  quantity: 0,
  productId: 1,
  image: "images/cherry.jpg"
},

{
  name: "Orange",
  price: 2.50, 
  quantity: 0,
  productId: 2,
  image: "./images/orange.jpg"
},

{
  name: "Strawberry",
  price: 3.00,
  quantity: 0,
  productId: 3,
  image: "./images/strawberry.jpg"
}
];
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
let cart= [];

let totalPaid = 0;
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
let productList = products;
function getProductById(productId)
{ return products.find(p => productId === p.productId);

} 
function addProductToCart(productId) {
  let product = getProductById(productId);

  if (product) {
    let cartItem = cart.find(item => item.productId === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      product.quantity += 1;
      if(!cart.includes(product)){
        cart.push(product);
      }}
  }
}
/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  let product = products.find(p => p.productId === productId);
  if (product) {
    product.quantity += 1;
  }
}
/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
/* this function decreases the quantity of the items in the cart */
function decreaseQuantity(productId) {
  let product = products.find(p => p.productId === productId);
  if (product) {
    let cartIndex = cart.findIndex(item => item.productId === productId)
    if (cartIndex !== -1) {
      cart[cartIndex].quantity -= 1;
    if (cart[cartIndex].quantity === 0) {
      cart.splice(cartIndex, 1); 
    }}
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) { /* This function will remove the selected product from the cart */
  let product = products.find(p => p.productId === productId);
  if (product) {
    product.quantity = 0;
    cart.splice(cart.indexOf(product), 1);
  }
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let total= 0;
  for (let item of cart) {
    total += item.price * item.quantity;
  }
  return total;
}
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
  cart.forEach(item => {
    let product = getProductById(p => p.productId === productId)
    if (product) {
      function emptyCart() {
        cart.forEach(function (product){
          removeProductFromCart
        });
      }
    }
  });
}
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
    totalPaid += amount;
    let totalCost = cartTotal();
    let remainingBalance = totalPaid - totalCost;
    if (remainingBalance >= 0) {
      totalPaid = 0;
      emptyCart()
    }
  return remainingBalance;
}
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}