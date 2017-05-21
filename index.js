var cart = []

function getCart() {
 return cart
}

function setCart(c) {
  cart = c
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100)
  cart.push( { [item]: price } )
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {

  if (cart.length === 0) { return console.log("Your shopping cart is empty.") }

  var items = []
  for (var i in cart) {
    var item = Object.keys(cart[i])
    items.push(`${item.join()} at $${cart[i][item]}`)
  }
  console.log(`In your cart, you have ${items.join(", ")}.`)
}

function total() {
  var price = 0
  for (var i in cart) { price += Object.values(cart[i])[0] }
  return price
}

function removeFromCart(item) {
  // var arr = []
  // for (var i in cart) { arr.push(Object.keys(cart[i])[0]) }
  // if (arr.includes(item))
  //
  //   {cart.splice(i, 1)}
  // else
  //   { console.log("That item is not in your cart.") }
  var incart = false
  for (var i in cart) {
    if ( cart[i].hasOwnProperty(item) )
      { cart.splice(i, 1)
        incart = true }
    }
  if ( incart === false ) { console.log("That item is not in your cart.") }
  return cart
}

function placeOrder(cardNumber) {
  if (!!cardNumber) {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    setCart([])
    }
  else {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

}
