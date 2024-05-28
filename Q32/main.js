//                              ASSIGNMENT # 32
//============================================================================
//  .Checking Usernames: Do the following to create a program that simulates
//   how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or 
//   two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already
//   been used. If it has, print a message that the person will need to enter
//   a new username. If a username has not been used, print a message saying that the username is available.  
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//Array of current users
var current_users = ["Ali", "Areeba", "Zain", "Muhib", "Ahad"];
//Array of new users
var new_users = ["Ayesha", "Muhib", "Ahad", "Mahad", "Abaan"];
//Loop through new users to check for usernames availability
new_users.forEach(function (new_one_user) {
    //Making a condition for user name already exist and save in our_condition  variabel
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    //Print different messages using if else statements
    if (our_condition) {
        console.log("Sorry,".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This user name : ".concat(new_one_user, " is available."));
    }
});
