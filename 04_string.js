var greet="Good Morning";
var totalChars=greet.length;
console.log("total no of character is:",totalChars);
var charAt=greet.charAt(7);
console.log("character at index 7 is:",charAt);
var charAt=greet.charAt(0);
console.log("character at index 0 is:",charAt);
var charAt=greet.charAt(11);
console.log("character at index 11 is:",charAt);

var sentence = "When you join meetings, webinars, chats or channels hosted on Zoom, your profile information";
var totalChars = sentence.length;
var lastChar = sentence.charAt(totalChars-1);
console.log("Last char is:" , lastChar);

console.log("========== indexOf() ==================");
var greet = "Good Morning";
var indexOfM = greet.indexOf('M');
console.log("Index of char M is: ", indexOfM);

console.log("========== concat() ==================");
var firstName = "Gajanan";
var lastName= " Kharat";
var resultConcat = firstName.concat(lastName);
console.log("Concat result is:", resultConcat);

console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(`========== toUpperCase() ==================`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log(`========== includes() ==================`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);


console.log(`========== trim() ==================`);
var result="   to trim the space    ";
console.log(`before usimg the trim() method the sentence is : ${result}`);
var len = result.length;
console.log(`before using trim the length of sentence: ${len}`);
var trimResult=result.trim();
var leng = trimResult.length;
console.log(`After using trim the length of sentence: ${trimResult}`);
console.log(`After using trim the length of sentence: ${leng}`);
var resultNew=len-leng;
console.log(`The total number of character are removed: ${resultNew}`);


console.log(`========== includes() ==================`);
var result="My name is Pratiksha";
console.log(result.includes("name"));

console.log("============ slice() =================");
var str = "My name is Pratiksha";
console.log(str.slice(0,12));
var greet = "Good Morning";
var result = greet.slice(3, 10);
console.log(`Slice is ${result}`);

console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);

function totalWord(argu1) {
   var greet1=argu1;
   var result=greet1.split(" ");
   console.log(result);
   console.log(`Total words are:${result.length}`);
   
}
totalWord(`I am Happy buddy`);
totalWord(`I am learning java the language of the internate`);

console.log(`========== search() ==================`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);

// Write a function with name totalWord() with one arguments
//  "I am happy Buddy" 
//  "I am learning JS the language of internet"
// and this function should return the total numbers of words

function totalWord(sentence){
    var words = sentence.split(" ");
    var totalWords = words.length;
    return totalWords
}
var totalWords = totalWord("I am happy Buddy");
console.log(`"I am happy Buddy". Total number od words is: ${totalWords}`);

var totalWords = totalWord("I am learning JS the language of internet");
console.log(`"I am learning JS the language of internet". Total number od words is: ${totalWords}`);