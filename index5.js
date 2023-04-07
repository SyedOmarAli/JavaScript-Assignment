var std1 = 50;
var std2 = 40;
var std3 = 70;
var std4 = 60;
var std5 = 40;
var std6 = 35;

var avgMarks = 0;

for (var i = 0; i < 6; i++) {
    avgMarks = (std1 + std2 + std3 + std4 + std5 + std6) / 6;
}

if (avgMarks < 60) {
    console.log("Grade : F");
}
else if (avgMarks < 70) {
    console.log("Grade : D");
}
else if (avgMarks < 80) {
    console.log("Grade : C");
} else if (avgMarks < 90) {
    console.log("Grade : B");
} else if (avgMarks < 100) {
    console.log("Grade : A");
}