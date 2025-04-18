// Array Implementation in JavaScript

// Creating an array
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing elements in an array
console.log("First fruit:", fruits[0]); // Output: Apple
console.log("Second fruit:", fruits[1]); // Output: Banana

// Adding elements to an array
fruits.push("Orange"); // Adds at the end
console.log("After push:", fruits);

fruits.unshift("Mango"); // Adds at the beginning
console.log("After unshift:", fruits);

// Removing elements from an array
fruits.pop(); // Removes the last element
console.log("After pop:", fruits);

fruits.shift(); // Removes the first element
console.log("After shift:", fruits);

// Iterating over an array
fruits.forEach((fruit, index) => {
    console.log(`Fruit at index ${index}: ${fruit}`);
});

// Finding an element in an array
let index = fruits.indexOf("Banana");
if (index !== -1) {
    console.log("Banana found at index:", index);
} else {
    console.log("Banana not found");
}

// Filtering an array
let filteredFruits = fruits.filter(fruit => fruit.startsWith("C"));
console.log("Filtered fruits:", filteredFruits);

// Mapping an array
let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase fruits:", upperCaseFruits);

// Reducing an array
let concatenatedFruits = fruits.reduce((acc, fruit) => acc + ", " + fruit);
console.log("Concatenated fruits:", concatenatedFruits);

// Checking if an array includes an element
let hasApple = fruits.includes("Apple");
console.log("Does the array include 'Apple'?", hasApple);