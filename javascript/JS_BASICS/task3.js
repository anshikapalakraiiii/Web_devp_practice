//Task : Shopping Cart  and variable Arguments
//concepts : objects, arrays inside objects ,rest parameters ,loop functions 
// create a shoppingcart object containig a customer name and an array of items .each item should have name 
// create a function calculatecartTotal(...prices) that accepts any number of prices and return their sum.
// create a function calculatecartTotal(item) that calculates  the total cost of one item. 
// create a function calculatecartTotal(cart) that calculates  the complete bill.
//Apply a 10% discount if the bill exceds $2000
//Display the checkout Summary
// Write  a function displayCheckoutSummary(cart) that display:
//




// ANSWER //
const shoppingCart = {
    customerName: "Rahul",
    items: [
        { name: "Milk", price: 30, quantity: 2 },
        { name: "Bread", price: 40, quantity: 1 },
        { name: "Eggs", price: 90, quantity: 2 },
        { name: "Rice", price: 250, quantity: 1 }
    ]
};
function calculateItemTotal(item) {
    return item.price * item.quantity;
}
function calculateCartBill(cart) {
    let total = 0;
    for (let item of cart.items) {
        total = total + calculateItemTotal(item);
    }
    if (total > 2000) {
        total = total - (total * 10 / 100);
    } else {
        total = total;
    }
    return total;
}
function displayCheckoutSummary(cart) {
    console.log("Customer Name:", cart.customerName);

    for (let item of cart.items) {
        console.log(
            item.name,
            "Price:", item.price,
            "Quantity:", item.quantity,
            "Total:", calculateItemTotal(item)
        );
    }
    let bill = calculateCartBill(cart);
    if (bill > 2000) {
        console.log("10% Discount Applied");
    } else {
        console.log("No Discount");
    }
    console.log("Final Bill:", bill);
}
displayCheckoutSummary(shoppingCart);