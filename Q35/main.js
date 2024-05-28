//                                              ASSIGNMENT # 35
//=====================================================================================================================================
//.Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals 
//in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement 
//about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these 
//animals have in common. You could print a sentence such as Any of these animals would make a great pet!
//Creating an Array
var petAnimals = ["Cat", "Dog", "Rabbit"];
//Using for loop to print animal name
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var animal = petAnimals_1[_i];
    console.log(animal);
}
//Using for loop to print the statement about each animal
for (var _a = 0, petAnimals_2 = petAnimals; _a < petAnimals_2.length; _a++) {
    var onePet = petAnimals_2[_a];
    console.log("A ".concat(onePet, " would make a great pet."));
}
//Print a message outside of for loop
console.log("\nAny of these animals would make a great pet!");
