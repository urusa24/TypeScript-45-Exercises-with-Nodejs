//                                              ASSIGNMENT # 42
//===================================================================================================
//.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called 
//make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s 
//name. Call show_magicians() to see that the list has actually been modified.

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

//Call the function to print each magicians name
show_magicians(magician_name);

//Call make_great function to modify magicians name
let great_magician = make_great(magician_name);

//Call show magicians that show modified list of magicians
show_magicians(great_magician);

