var num1 = +prompt("Enter 1st number");
var num2 = +prompt("Enter 2nd number");
var num3 = +prompt("Enter 3rd number");
var num4 = +prompt("Enter 4th number");
var num5 = +prompt("Enter 5th number");

if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
    console.log(num1);
}
else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
    console.log(num2);
}
else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
    console.log(num3);
}
else if (num4 > num1 && num4 > num3 && num4 > num2 && num4 > num5) {
    console.log(num4);
}
else {
    console.log(num5);
}
