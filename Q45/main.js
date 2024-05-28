//                                              ASSIGNMENT # 45
//=======================================================================================================
//.	Cars: Write a function that stores information about a car in a Object. The function should always
// receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color 
//or an optional feature. Print the Object that’s returned to make sure all the information was stored
// correctly.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Initialize a car object with manufacturer and model
function create_car(manufacturer, model, optional) {
    return __assign({ manufacturer: manufacturer, model: model }, optional);
}
// Call the function to create a car object
var my_car = create_car("toyota", "corolla", { colour: "silver", year: "2024" });
// Print the variable to ensure all the information is stored correctly in the car object
console.log(my_car);
