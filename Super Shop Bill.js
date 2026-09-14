// 1-------------- Super Shop Bill
let shoppingAmount = 6000;
let discount = 0;

if (shoppingAmount >= 5000) {
    discount = shoppingAmount * 0.1;
} else if (shoppingAmount >= 3000) {
    discount = shoppingAmount * 0.05;
} else {
    discount = 0;
}


let AmountAfterDiscount = shoppingAmount - discount;
let vat = AmountAfterDiscount * 0.05;

let finalBill = AmountAfterDiscount + vat;

console.log("Shopping Amount:", shoppingAmount, "Tk");
console.log("Discount:", discount, "Tk");
console.log("VAT:", vat, "Tk");
console.log("Final Bill:", finalBill, "Tk");


// Function-------------
function SuperShopBill(shoppingAmount) {
    let discount = 0;

    if (shoppingAmount >= 5000) {
        discount = shoppingAmount * 0.10;
    } else if (shoppingAmount >= 3000) {
        discount = shoppingAmount * 0.05;
    } else {
        discount = 0;
    }

    let AmountAfterDiscount = shoppingAmount - discount;
    let vat = AmountAfterDiscount * 0.05;

    let finalBill = AmountAfterDiscount + vat;

    console.log("Shopping Amount:", shoppingAmount, "Tk");
    console.log("Discount:", discount, "Tk");
    console.log("VAT:", vat, "Tk");
    console.log("Final Bill:", finalBill, "Tk");
}

console.log(SuperShopBill(6000));