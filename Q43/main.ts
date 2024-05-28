//                                              ASSIGNMENT # 43
//===================================================================================================
//.	Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a 
//copy of the array of magicians’ names. Because the original array will be unchanged, return the new 
//array and store it in a separate array. Call show_magicians() with each array to show that you have 
//one array of the original names and one array with the Great added to each magician’s name.

//Define a function to print each magician name from an array
function show_magicians(magician:string[]){
    magician.forEach(name => console.log(name));
}
//Function to make magicians great through .map it will modify array
function make_great(magician:string[]){
    return magician.map(name => `The Great ${name}`);
}
//Define an array containing magicians name
let magician_name=["Harry poter","Talha","Hamzah"]

//Making a copy of original array through .slice() function
let copy_magician_names = magician_name.slice()

//Modified the copied array to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

//Show both arrays original and copied
//original
console.log("Original Array\n");
show_magicians(magician_name);

//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
