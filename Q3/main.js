//Name Cases: Store a person's name in a variable and print that person's name in 
//lower case, upper case and title case.
var personName = "urusa aazim";
console.log("\nLowerCase :" + personName.toLowerCase());
console.log("\nUpperCase :" + personName.toUpperCase());
//First we use replace method()
//we use regular expressions to match the first word of each string and save it in char function
//and we use arrow function to convert into upper case.
console.log("\nTitleCase :" + personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
