//                                                   ASSIGNMENT # 37
//=====================================================================================================================================
//.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
//I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size 
//with a different message.
//Making a function
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("The Shirt size is ".concat(size, " and it has the message: \"").concat(message, "\" printed on it."));
}
//calling a function with by-default values
make_shirt();
//calling a function with medium size and default message
make_shirt("Medium");
//calling a function of any size with a different message
make_shirt("Small", "Keep Calm And Code On");
