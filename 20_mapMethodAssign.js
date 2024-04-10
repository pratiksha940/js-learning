console.log(`============ step 1: add the 10 for each array element =============`);
const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19];
let array = [];
arrayNumbers.forEach(element => {
    array.push(element+10);
});
console.log(`Original array:`);
console.log(arrayNumbers);
console.log(`add the 10 for each array element:`);
console.log(array);

// let arrayCube = [];
// arrayNumbers.forEach(element => {
//     arrayCube.push(element*element*element);
// });
// console.log(arrayNumbers);
// console.log(arrayCube);
console.log(`=========== step 2: cube of the array elements =============`);
let cubeArray= arrayNumbers.map((value)  =>{
    return value**3;
} 
);
console.log(`original array:`);
console.log(arrayNumbers);
console.log(`cube of the array elements:`);
console.log(cubeArray);

console.log(`============= step 3: add the index value into its corresponding each array element ==================`);
let arrayAddIndex=[];
arrayNumbers.forEach((element,index) => {
    arrayAddIndex.push(element+index);
});
console.log(`original array:`);
console.log(arrayNumbers);
console.log(`add the index value into its corresponding each array element:`);
console.log(arrayAddIndex);