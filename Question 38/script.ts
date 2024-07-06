//Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


function describe_city(city: string, country: string = "default country"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Paris");