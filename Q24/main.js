//                          ASSIGNMENT # 24
//=====================================================================================
// More Conditional Tests: You don’t have to limit the number 
//of tests you create to 10. If you want to try more comparisons, 
//write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//Define Variables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
//Tests for equality and inequality with strings
console.log("\nIs apple is equal to apple?");
console.log(apple == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");
//Tests using Lowercase Function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
//Numerical Tests
//Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//Not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);
//Less than
console.log("\nIs ten is greater than zero?");
console.log(twenty < 10);
//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
//Less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);
//Tests using "and" & "or" operator
//using && (and)operator
console.log("\nTwenty is not equal to 10 and Twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
console.log("\nTwenty is not equal to 10 and Twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);
//using || (or)operator
console.log("\n20 is greater than 50 or 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n20 is greater than 50 or 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
//Test whether an item is include in an array
console.log("\nIs orange include in my fruits array?");
console.log(fruits.includes("orange"));
//Not include
console.log("\nIs orange not include in my fruits array?");
console.log(!fruits.includes("orange"));
