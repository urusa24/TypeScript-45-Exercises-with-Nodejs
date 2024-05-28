//                              ASSIGNMENT # 31
//============================================================================
//.	No Users: Add an if test to Exercise 30 to make sure the list of users 
//  is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct 
//   message is printed.
//Creating an Array with 5 values
var userNames = ["Wajiha", "Hamdiyah", "Hafsa", "Admin", "Mahiha"];
//Remove all values from our array now our array is empty
userNames = [];
//If statement for checking length of our array is empty
if (userNames.length === 0) {
    console.log("\nyour array is empty. We need to find some users!");
}
//Using ForEach loop on an array
userNames.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, ", Would You like to see a a status report?"));
    }
    else {
        console.log("Hello ".concat(oneuser, ", Thank you for logging in again"));
    }
});
