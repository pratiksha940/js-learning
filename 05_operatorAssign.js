console.log(`=========== step 1: length of the word and square of the length of word =============`);
function squareOfWordLength(oneArgu,secondArgu,thirdArgu) {
    console.log(`the length of the word "javascript" is: ${oneArgu.length}`);
    var square1 = oneArgu.length**2;
    console.log(`the square of the length of word "javascript" is: ${square1}`);
    console.log(`--------------------------------------------------------------------`);
    console.log(`the length of the word "Google chrome" is: ${secondArgu.length}`);
    var square2 = secondArgu.length**2;
    console.log(`the square of the length of word "Google Chrome" is: ${square2}`);
    console.log(`---------------------------------------------------------------------`);
    console.log(`the length of the word "Developer Smart" is: ${thirdArgu.length}`);
    var square3 = thirdArgu.length**2;
    console.log(`the square of the length of word "Developer Smart" is: ${square3}`);
}
squareOfWordLength("javascript","Google Chrome","Developer Smart");

console.log(`============= step 2: Find string length and divide by total number of words ===============`);
function opretorOnString() {
    console.log(`Given String is: "I am Angular Developer"`);
    var givenString = "I am Angular Developer";
    var stringLength = givenString.length;
    console.log(`the length of the string "I am Angular Developer" is:${stringLength}`);
    var result = givenString.split(" ");
    console.log(`the words in string "I am Angular Developer" is:${result}`);
    var totalWords = result.length;
    console.log(`the total words in the string is:${totalWords}`);
    var divideByString = stringLength/totalWords;
    console.log(`the string length divide by total number of words is: ${divideByString}`);
    var multiplyByString = stringLength*totalWords;
    console.log(`the string length multiply by the total words is: ${multiplyByString}`);

    
}
opretorOnString();