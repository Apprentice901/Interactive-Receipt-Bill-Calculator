// Phase 2 (Interactive Item Collection)

let storeInfo = {
    name: "", // Variable Values
    taxRate: 0.08, // Variable Values
    tableFee: "" // Variable Values
};
for (;;) {
    try {
        let name = promtDirection("Store Name?: ");
        let taxRate = promtDirection("Tax Rate?: ")
        let tableFee = promtDirection("Table?: ")
        
        if (!name || name.trim() ==="") throw new Error("Invalid stor name"); // If statement (With Error Type)
        if (Number.isNaN(taxRate)) throw new Error("Invalid tax rate"); // If statement (With Error Type)
        if (Number.isNaN(tableFee)) throw new Error("Invalid table fee"); // If statement (With Error Type)

        storeInfo.name = name; // (Object.create) Instances
        storeInfo.taxRate = taxRate; // (Object.create) Instances
        storeInfo.tableFee = tableFee; // (Object.create) Instances
        
        console.log("Welcome to " + name + ".");
        console.log("Your Tax Rate is " + taxRate + ".");
        console.log("Your service fee is " + tableFee + ".");
        break;
        } catch (Error) {
        console.log("Not a valid name. Try again." + name);
        console.log("Not a valid table. Try again." + tableFee);
        console.log("Not a valid tax. Try again." + taxRate);
        }
    }

// Create an empty array named receiptItems. 
receiptItems.prototype.forEach.call({ // You will use this array to dynamically store food items as they are ordered.

}, console.log(receiptItems));

// Use a while loop 
// combined with prompt() 
let newItem; 
do { // Prompt()
     // to continuously ask the user if they want 
     // to enter a new item (e.g., Y to continue, 
     // anything else to stop).
    newItem = prompt("Do you want a new Item? ((Y)to continue): ");
} while (!newItem); {
    // Inside the (while)loop, 
    // prompt() for the item’s name 
    // and its price.
    itemName = prompt("Enter item Name: ");
    
    // Convert the price input to a number using 
    // Number().
    itemPrice = Number(prompt("Enter item Price: "))

    // Package the name and price into an item 
    // object (e.g., { name: "Burger", price: 10.50 }) 
    let itemObject = {name: "Burger", price: 10.50};
    // and add it to receiptItems using the 
    // .push() method.
    itemObject.push(receiptItems);
}
// Once the loop ends, 
// log the total count of items added 
console.log(newItem);
// and print the receiptItems array 
// to the console to verify your data.