// 3-------------- Student Grade Calculator
let bangla = 71;
let english = 82;
let math = 97;

let totalMarks = bangla + english + math;
let averageMarks = totalMarks / 3;

let grade;

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


// Function-------------
function StudentGradeCalculator(bangla, english, math) {
    let totalMarks = bangla + english + math;
    let averageMarks = totalMarks / 3;

    let grade;

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

    console.log("Bangla:", bangla);
    console.log("English:", english);
    console.log("Math:", math);
    console.log("Total Marks:", totalMarks);
    console.log("Average Marks:", averageMarks.toFixed(2));
    console.log("Grade:", grade);
}

console.log(StudentGradeCalculator(70, 80, 60));