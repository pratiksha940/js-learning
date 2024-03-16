console.log(`============step 1 : Greatest Number amongst two numbers =============`);
function greaterNumber(num1,num2){
var result = (num1>num2)?num1:num2;
console.log(`the greatest value amongst of ${num1} and ${num2} is : ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`================ step 2 : check number is even or odd ====================`);
function isEvenOrOddNum(oneNum) {
    var result = oneNum%2==0?true:false;
    console.log(`the given number ${oneNum} is even or odd : ${result}`);
}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);

console.log(`============== step 3:Given word length is even or odd ==============`);
function wordLength(oneWord) {
    var lengthOfWord = oneWord.length;
    var result = lengthOfWord%2==0?"Even":"Odd";
    console.log(`the word length of word ${oneWord} is even or odd:${result}`);

}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");