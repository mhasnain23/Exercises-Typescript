//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function orderSandwhich(...items: string[]): void {
    console.log("Making sandwhich with the following item:");
    items.forEach(items => {
        console.log("- " + items);
    });
}

console.log("Sandwich is ready!\n");

// Call the function with different numbers of arguments

orderSandwhich("Egg", "Tomato", "Mayonnaise \n");
orderSandwhich("Ham", "Cheese \n");
orderSandwhich("Peanut Butter", "Jelly \n");