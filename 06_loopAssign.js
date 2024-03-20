// console.log(`========= step 1: count the number of vowels in given sentence ==========`);
// var sentence = "I am very good IT Developer";
// var vowels = "aeiou";
// var word = "";
// var count=0;

// for (let index = 0; index <sentence.length; index++) {
//     var result = sentence.charAt(index);
//     var lowercase= result.toLowerCase();
//     if(vowels.includes(lowercase)){
        
//         console.log(`the vowels are in sentence is:${sentence.charAt(index)}`);
//         count++; 
//     }
//     word=word+result;
// }
// console.log(`The sentence is : ${word}`);
// console.log(`Total vowels in the given sentence is: ${count}`);

console.log(`========= step 2: sum of cube of numbers ===========`);
var sum=0;
var number=[1,2,3,4,5];
console.log(`the numbers are:${number}`);
for (let number = 1; number <=5; number++) {
    // console.log(number);
    sum=sum+number**3;
    
}
console.log(`the sum of cube of the given numbers are: ${sum}`);

// console.log(`============step 3: odd position characters in given string ============`);
// // var string="Hard work always pays back";
// var word="";
// console.log(`the string is: ${word}`);
//  function oddPositionedChars(string) {
//     console.log(`the string is:${string}`);
//     for (let index = 0; index<string.length; index++) {
//         //console.log(string.charAt(index));
//         var result=string.charAt(index);
//         if (index%2!=0 && result!=" ") {
//             console.log(string.charAt(index));
//         }
//          word=word+result;
//     }
    
//     return oddPositionedChars;
// }

// oddPositionedChars("Hard work always pays back");
// oddPositionedChars("Soon I will be UI IT Champ");

