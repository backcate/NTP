// 1-------------- Super Shop Bill
let shoppingAmount = 5000;
let discount = 0;

// Calculate discount
if (shoppingAmount >= 5000) {
    discount = shoppingAmount * 0.1;
} else if (shoppingAmount >= 3000) {
    discount = shoppingAmount * 0.05;
} else {
    discount = 0;
}


let amountAfterDiscount = shoppingAmount - discount;
let vat = amountAfterDiscount * 0.05;

let finalBill = amountAfterDiscount + vat;

console.log("Shopping Amount:", shoppingAmount, "Tk");
console.log("Discount:", discount, "Tk");
console.log("VAT:", vat, "Tk");
console.log("Final Bill:", finalBill, "Tk");