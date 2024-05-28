//                                      ASSIGNMENT # 18
//================================================================================================
//  Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making an array of countries and Print its original order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order :", countriesToVisit);
//Print the array in an Alphabetical order without modifying the actual array list
console.log("Alphabetical Order :", __spreadArray([], countriesToVisit, true).sort());
//Show that the array is still in its original order
console.log("Still in original order :", countriesToVisit);
//Print the array in the revrse order without modifying the actual list
console.log("Reverse Order :", __spreadArray([], countriesToVisit, true).reverse());
//Show that array is still in its original order
console.log("Still in original order :", countriesToVisit);
//We have changed the original array order now
console.log("Original Array Reversed :", countriesToVisit.reverse());
//Print the array to show that its back to its original order
console.log("Back to original order :", countriesToVisit.reverse());
//Print the array to show that its order has been changed in Alphabetical order now
console.log("Sorted in Alphabetical order :", countriesToVisit.sort());
//We have changed again the original array order now in reverse order again
console.log("Original Array Reversed Again:", countriesToVisit.reverse());
