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


console.log(`========== trim() ==================`);
var result="   to trim the space    ";
console.log(`before usimg the trim() method the sentence is : ${result}`);
var len = result.length;
console.log(`before using trim the length of sentence: ${len}`);
var trimResult=result.trim();
var leng = trimResult.length;
console.log(`After using trim the length of sentence: ${trimResult}`);
console.log(`After using trim the length of sentence: ${leng}`);

console.log(`========== includes() ==================`);
var result="My name is Pratiksha";
console.log(result.includes("name"));

console.log("============ slice() =================");
var str = "My name is Pratiksha";
console.log(str.slice(0,12));