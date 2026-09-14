// 2-------------- Ride Fare Calculator
let distance = 9;
let fare = 0;

if (distance <= 2) {
    fare = distance * 50;
} else if (distance <= 5) {
    fare = (2 * 50) + ((distance - 2) * 40);
} else {
    fare = (2 * 50) + (3 * 40) + ((distance - 5) * 30);
}

console.log("Distance:", distance, "km");
console.log("Total Fare:", fare, "Tk");


// Function-------------
function RideFareCalculator(distance) {
    let fare = 0;

    if (distance <= 2) {
        fare = distance * 50;
    } else if (distance <= 5) {
        fare = (2 * 50) + ((distance - 2) * 40);
    } else {
        fare = (2 * 50) + (3 * 40) + ((distance - 5) * 30);
    }

    console.log("Distance:", distance, "km");
    console.log("Total Fare:", fare, "Tk");
}

console.log(RideFareCalculator(9));