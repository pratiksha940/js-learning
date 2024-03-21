const fruitSeasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
//console.log(`the array is ${fruitSeasonal}`);
console.log(`The fruits in season are: ${fruitSeasonal}`);
var firstFruit = fruitSeasonal[0];
// var lastFruit=fruitSeasonal.pop();
// console.log(fruitSeasonal);
var result = fruitSeasonal.length-1;
var lastFruit = fruitSeasonal[result];

console.log(`=========== step 1: First and Last fruit in the array ===========`);
console.log(`the first fruit is: ${firstFruit}`);
console.log(`the last fruit is: ${lastFruit} `);

console.log(`========== step 2: Add the element "papaya" before element "banana" ===========`);
var addElement = fruitSeasonal.unshift("papaya");
console.log(`the add element "papaya" before the element "banana" : ${fruitSeasonal}`);

console.log(`=========== step 3: Remove Mango from the array =========`);
var removeMango= fruitSeasonal.splice(fruitSeasonal.length-2,1);
//console.log(removeMango);
console.log(` the "Mango" remove from array then array is: ${fruitSeasonal}`);
var addPineapple = fruitSeasonal.push("Pineapple");

console.log(`=========== step 4: Add the element at last position ==========`);
console.log(`the add "Pineapple at last position then array is: "${fruitSeasonal}`);

console.log(`========== step 5: Add element "Dragon Fruit" before "Water Melon" ==========`);
var addDragonFruit = fruitSeasonal.splice(fruitSeasonal.length-2,0,"Dragon Fruit");
console.log(`Add the element "Dragon Fruit" before the "Water Melon" then array is: ${fruitSeasonal}`);

console.log(`======== step 6: Replace an element "Orange" with "Kiwi" ===========`);
var replaceOrange = fruitSeasonal.splice(2,1,"Kiwi");
console.log(`the "Orange" replace with "Kiwi" then array is: ${fruitSeasonal}`);

console.log(`========= step 7: Log the element From index 1 to 4 ==========`);
var showElement = fruitSeasonal.slice(1,5);
console.log(`the elements from index 1 to 4 is: ${showElement}`);

console.log(`========= step 8: show the last three elements ===========`);
var lastThreeFruit = fruitSeasonal.slice(fruitSeasonal.length-3,fruitSeasonal.length);
console.log(`the last three fruits are: ${lastThreeFruit}`);
