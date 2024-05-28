//                                      ASSIGNMENT # 16
//================================================================================================
//More Guests: You just found a bigger dinner table, so now more space is available. 
//Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. 
//• Use append() to add one new guest to the end of your list.
//• Print a new set of invitation messages, one for each person in your list.
//Creating a guest list array
var guestList = ["Alishba", "Ayesha", "Nazia", "Fouzia"];
//Making variable for those guest who can't come
var dontCome = guestList[0];
//Printing the name of guest who can't come
console.log("\n", dontCome, "will not come.");
//Add or remove value from guest list array
guestList.splice(0, 1, "Maniha");
//Message print for bigger table
console.log("\nGood News! We have found a bigger table for Dinner.");
//Adding a new guest at starting index of array
guestList.unshift("Wajiha");
//Adding a new guest at ending index of array
guestList.push("Muzaina");
//Get a middle index of our guest list array   
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "Hafsa");
//Print message of updated list
console.log("\n\tUpdated List Of Our Guests\n");
//Sending an invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to dinner with me?")); });
