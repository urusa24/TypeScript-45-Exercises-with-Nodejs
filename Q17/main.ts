//                                      ASSIGNMENT # 17
//================================================================================================
//  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time
//  for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you
//  can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. 
//  Each time you pop a name from your list, print a message to that person letting them know you’re 
//  sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make 
//  sure you actually have an empty list at the end of your program.


//Creating a guest list array
let guestList = ["Alishba","Ayesha","Nazia","Fouzia"];

//Making variable for those guest who can't come
let dontCome = guestList[0];

//Printing the name of guest who can't come
console.log("\n",dontCome, "will not come.");

//Add or remove value from guest list array
guestList.splice(0,1,"Maniha");

//Message print for bigger table
console.log("\nGood News! We have found a bigger table for Dinner.");

//Adding a new guest at starting index of array
guestList.unshift("Wajiha");

//Adding a new guest at ending index of array
guestList.push("Muzaina");

//Get a middle index of our guest list array   
let middleIndex : number = Math.floor(guestList.length / 2 );

//Adding a new guest at middle index of array
guestList.splice(middleIndex, 0, "Hafsa");

//Print message of updated list
console.log("\n\tUpdated List Of Our Guests\n");

//Sending an invitation message to our guests one by one with their names
guestList.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me?`));

//Inform that only two guests can be invited dinner
console.log("\nUnfortunately, The new dinner table won't arrive on time, so I can invite only two guests to dinner with me\n");

//Using while loop to remove guests from the array untill only two names remain
while(guestList.length > 2){
let removeGuest = guestList.pop();
console.log(`Sorry, ${removeGuest} I can't invite you to Dinner.`);
}

//Sending an invitations to the last two guests on the list
console.log("\n\tInvitation to the last 2 guests\n");
guestList.forEach(lasttwo => console.log(`Luckily ${lasttwo}, You are still invited to dinner`));

//Removing last two guests from the list
guestList.pop();
guestList.pop();

console.log("\n\tEmpty List :", guestList);