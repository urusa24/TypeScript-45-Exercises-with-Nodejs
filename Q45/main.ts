//                                              ASSIGNMENT # 45
//=======================================================================================================
//.	Cars: Write a function that stores information about a car in a Object. The function should always
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color 
//or an optional feature. Print the Object that’s returned to make sure all the information was stored
// correctly.


//Define a function to create a car object with optional options
type car = {
    manufacturer : string;
    model : string;
    [key : string] : any;
}
// Initialize a car object with manufacturer and model
function create_car(manufacturer:string, model:string, optional:Record<string,any>): car{
    return{
    manufacturer,
    model,
    ...optional
    }
}
    
// Call the function to create a car object
const my_car : car = create_car("toyota","corolla",{colour:"silver",year :"2024"});

// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
