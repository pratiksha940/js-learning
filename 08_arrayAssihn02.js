
const arrayNumbers =[20,31,40,25,23,11,29,9,60,2,11];
console.log(` the given array is: ${arrayNumbers}`);
let lengthOfArray = arrayNumbers.length;
console.log(`1.The total elements available in the array:${lengthOfArray}`);
console.log(`------------------------------------------------------------------------------`);
let firstElement = arrayNumbers[0];
console.log(`2.The first element in the array is: ${firstElement}`);
let lastElement = arrayNumbers[arrayNumbers.length-1];
console.log(`-------------------------------------------------------------------------------`);
//console.log(`3.the last element in the array is: ${lastElement}`);
let thiredLastElement = arrayNumbers[arrayNumbers.length-3];
console.log(`3.The third last element in the array is: ${thiredLastElement}`);
console.log(`--------------------------------------------------------------------------------`);
console.log(`4.All even numbers in the array is:`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element%2==0){
        console.log(element);
     }
}
console.log(`----------------------------------------------------------------------------------`);
console.log(`5.All odd numbers in the array is:`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%2!=0) {
        console.log(element);
    }
}
console.log(`--------------------------------------------------------------------------------`);
let sumEven=0;
console.log(`6.Even positioned elements in the array:`);
for (let index = 0; index <=arrayNumbers.length; index++) {
    const element =arrayNumbers[index];
    if (index%2==0) {
        console.log(element);
        sumEven=sumEven+element;
    }
   
}
console.log(`sum of even positioned elements in the array: ${sumEven}`);
console.log(`--------------------------------------------------------------------------------`);
console.log(`7.Odd positioned elements in the array:`);
let sumOdd=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (index%2!=0) {
        console.log(element);
        sumOdd=sumOdd+element
    }
}
console.log(`sum of odd positiones elements from the array is:${sumOdd}`);
console.log(`--------------------------------------------------------------------------------`);
//console.log(`================step 8: sum of all elements from the array ==================`);

let sumAll=0
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    sumAll=sumAll+element;
}
console.log(`8.Sum of all elements from the array is:${sumAll}`);
console.log(`--------------------------------------------------------------------------------`);
console.log(`9.The elements are multiple of 5 is:`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        console.log(element);
    }
}
console.log(`10.The 115 number is available in array : ${arrayNumbers.includes(115)}`);
console.log(`11.The 23 number is available in array : ${arrayNumbers.includes(23)}`);

console.log(`12.The original array is: ${arrayNumbers}`);
let addElement = arrayNumbers.splice(3,0,55,66);
console.log(`the 55 and 66 elements add at index 3 then array is: ${arrayNumbers}`);

console.log(`13.The original array is: ${arrayNumbers}`);
let deleteElement = arrayNumbers.splice(4,3,0);
console.log(`the delete the three elements from index 4 array is: ${arrayNumbers}`);
    



