// 3-------------- Student Grade Calculator
let bangla = 71;
let english = 82;
let math = 97;

// Calculate total and average
let totalMarks = bangla + english + math;
let averageMarks = totalMarks / 3;

let grade;

// Check if any subject is below 33
if (bangla < 33 || english < 33 || math < 33) {
    grade = "F";
} else if (averageMarks >= 80) {
    grade = "A+";
} else if (averageMarks >= 70) {
    grade = "A";
} else if (averageMarks >= 60) {
    grade = "B";
} else if (averageMarks >= 50) {
    grade = "C";
} else if (averageMarks >= 40) {
    grade = "D";
} else {
    grade = "F";
}

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks.toFixed(2));
console.log("Grade:", grade);