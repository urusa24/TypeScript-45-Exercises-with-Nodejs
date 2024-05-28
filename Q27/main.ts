//                                      ASSIGNMENT # 27
//======================================================================================================
// .   Alien Colors #3: Turn your if-else chain from Exercise 25-26 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the 
//      appropriate color alien.

//Define Variable
let alien_color = "Green";

//using If and Else-If statements
//Version 1
if(alien_color === "Green"){
    console.log("\n(Version:1) You shot down green alien. You have earned 5 points.");
}
else if(alien_color === "Yellow"){
    console.log("\nYou shot down yellow alien. You have earned 10 points.");
}
else if(alien_color === "Red"){
    console.log("\nYou shot down red alien. You have earned 15 points.");
}
//Version 2
let alien_color2 = "Yellow";

if(alien_color2 === "Green"){
    console.log("\nYou shot down green alien. You have earned 5 points.");
}
else if(alien_color2 === "Yellow"){
    console.log("\n(Version:2) You shot down yellow alien. You have earned 10 points.");
}
else if(alien_color2 === "Red"){
    console.log("\nYou shot down red alien. You have earned 15 points.");
}

//Version 3
let alien_color3 = "Red";

if(alien_color3 === "Green"){
    console.log("\nYou shot down green alien. You have earned 5 points.");
}
else if(alien_color3 === "Yellow"){
    console.log("\nYou shot down yellow alien. You have earned 10 points.");
}
else if(alien_color3 === "Red"){
    console.log("\n(Version:3) You shot down red alien. You have earned 15 points.");
}
