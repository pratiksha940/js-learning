let result;
console.log(`========== step 1: numeric string used with number by using operator"+"============`);
result = `3`+ 2;
console.log(`1. the string is "3" and number is 2 then result is: ${result}`);
result = `3`+true;
console.log(`2. the string is "3" and the boolean value is true then result is : ${result}`);
result = `3`+undefined;
console.log(`3. the string is "3" and the value is undefined then result is: ${result}`);
result =`3`+null;
console.log(`4. the string is "3" and the value is null then result is: ${result}`);

let result1;
console.log(`========== step 2: number is used with boolean value by using operator"+" and "-" ============`);
result1 = 4 + true;
console.log(`1. the number is 4 and boolean value is true then result is: ${result1}`);
result1 = 4 + false;
console.log(`2. the number is 4 and the boolean value is false then result is: ${result1}`);
result1 = `4` - true;
console.log(`3. the number is 4 and the boolean value is true then result is: ${result1}`);
result1 = `4` - false;
console.log(`4. the number is 4 and the boolean value is false then result is: ${result1}`);

console.log(`=============== step 3: numeric string used with -,+,/,* ================`);
result ='4'+'2';
console.log(`1.the numeric string "4" and "2" used with '+' operator then result is: ${result}`);
result ='4'-'2';
console.log(`2.the numeric string "4" and "2" used with '-' operator then result is: ${result}`);
result = '4'*'2';
console.log(`3.the numeric string "4" and "2" used with '*' operator then result is: ${result}`);
result = '4'/'2';
console.log(`4.the numeric string "4" and "2" used with '/' operator then result is: ${result}`);

console.log(`================step 4: undefined used with number,boolean or null =============`);
result = 4 + undefined;
console.log(`1.the number 4 is used with undefined then result is: ${result}`);
result = "string" - undefined;
console.log(`2.the "string" used with undefined then result is: ${result}`);
result = true + undefined;
console.log(`3.the boolean(true) used with undefined then result is: ${result}`);
result = null + undefined;
console.log(`4.the null used with undefined then result is: ${result}`);

console.log(`================= step 5: convert number string and boolean values into number ===========`);
result = Number("324");
console.log(`1.the string "324" isconvert into number using Number then result is: ${result}`);
result = Number(324e-1);
console.log(`2.the number 324e-1 convert into number using Number then result is: ${result}`);
result = Number(true);
console.log(`3.the boolean(true) convert into number using Number then result is: ${result}`);
result = Number(false);
console.log(`the boolean(false) convert into number using Number then result is: ${result}`);

console.log(`============== step 6: invalid string to number =============`);
result = Number("Hello");
console.log(`1.the string "Hello" convert into number using Number then result is: ${result}`);
result = Number(undefined);
console.log(`2.the undefined convert into number using Number then result is: ${result}`);
result = Number(NaN);
console.log(`3.the NaN convert into number using Number then result is: ${result}`);