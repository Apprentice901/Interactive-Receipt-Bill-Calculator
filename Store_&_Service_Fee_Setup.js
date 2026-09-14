// Phase 1 (Store & Service Fee Setup)

// Create a single object named storeInfo. 
let storeInfo = {
    name: "", // Variable Values
    taxRate: 0.08, // Variable Values
    tableFee: "" // Variable Values
};
 //This object will represent 
    // the restaurant details and baseline charges for a table.
    
// Prompt the user for the store’s name, 
// the tax rate (as a percentage, e.g., 8 for 8%), 
// and a standard table/service fee applied to 
// every bill.

// Store these values inside storeInfo with the 
// properties name, taxRate, and tableFee.
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
        
        // Log a welcome message to the console that 
        // prints the store name and the standard 
        // table fee.
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