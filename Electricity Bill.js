// 4-------------- Electricity Bill
let units = 240;
let bill = 0;

if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
} else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}

console.log("Units Used:", units);
console.log("Electricity Bill:", bill, "Tk");


// Function-------------
function ElectricityBill(units) {
    let bill = 0;

    if (units <= 100) {
        bill = units * 5;
    } else if (units <= 200) {
        bill = (100 * 5) + ((units - 100) * 7);
    } else {
        bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
    }

    console.log("Units Used:", units);
    console.log("Electricity Bill:", bill, "Tk");
}

console.log(ElectricityBill(240));