// Phase 3 (Processing the Order with "For...of")

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

receiptItems.prototype.forEach.call({
// Now that items are collected, process the order line-by-line using a loop.
// Iterate over the receiptItems array using a for...of loop.
let subtotal = 0; // Keep a running subtotal of all food item prices calculated inside the loop.
receiptItems.prototype.forEach.call({ 

// Process each item in receiptItems one by one
for (let entry of receiptItems) { // Errors
    console.log(`${entry.name} -- $${entry.price.toFixed(2)}`);

    // Keep a running subtotal of all food item prices
    subtotal += entry.price;

    // Example event count output
    console.log(`${entry.events.length} events.`);
}

    // After the loop completes, log the total food subtotal
    console.log(`Total food subtotal: $${subtotal.toFixed(2)}`); // Error's
}; console.log(receiptItems));
// Print each item’s name and price to the console in a formatted string (e.g., Bean Burrito -- $3.40).
console.log (itemName, price);

// After the loop completes, log the total food subtotal to the console.
console.log(subtotal);
}, console.log(receiptItems));

let newItem; 
do { // Prompt()
    newItem = prompt("Do you want a new Item? ((Y)to continue): ");
} while (!newItem); {
    itemName = prompt("Enter item Name: ");
    itemPrice = Number(prompt("Enter item Price: "))
    let itemObject = {name: "Burger", price: 10.50};
    itemObject.push(receiptItems);
}
console.log(newItem);

