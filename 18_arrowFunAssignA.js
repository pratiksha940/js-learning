console.log(`================ step 1: create arrow function with no return and no arguments ==================`);
const arrowFun = () => {
    console.log(`Good Morning, Today is Monday`);
}
arrowFun();
console.log(`============== step 2: create arrow function with 3 arguments and no return value ======================`);
 const multiplyArrow = (num1,num2,num3=1) => {
    let multiply = num1*num2*num3;
    console.log(`multiplication of three numbers ${num1},${num2},${num3} is = ${multiply}`);
 }
 multiplyArrow(5,5,2);
 multiplyArrow(10,4);

 console.log(`=============== step 3: create arrow function with 5 arguments and return value ====================`);
 const additionArrow = (num1, num2,num3,num4,num5) => {
    let result = num1+num2+num3+num4+num5;
    return result;

 }
 const additionOfNum = additionArrow(100,100,200,349,756);
 console.log(`the addition of numbers is:${additionOfNum}`);
 const additionOfString = additionArrow("I am"," learning"," ES6"," features"," in depth");
 console.log(`the addition of string is:${additionOfString}`);
