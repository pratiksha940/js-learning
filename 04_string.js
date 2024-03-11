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