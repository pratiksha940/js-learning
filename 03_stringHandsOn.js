function stringHandsOn() {
    console.log(`======= step 1: given string as it on console ===============`);
    console.log(`Given string:"   Hey you are doing good, keep it up   "`);
    var sentence ="   Hey you are doing good, keep it up   ";
    resultLen = sentence.length;
    console.log(`========== step 2: the length of the string =============`);
    console.log(`Length of the string is: ${resultLen}`); 
    console.log(`============== step 3: the length of the string without spaces ===========`);
    resultTrim = sentence.trim();
    removeSpaceLen = resultTrim.length;
    console.log(`length of the string remove the leading and trailing extra spaces: ${removeSpaceLen}`);
    var spaceCount = sentence.length-resultTrim.length
    console.log(`============= step 4: count the total number of extra spaces ==============`);
    console.log(`The total number of extra spaces count that is removed is: ${spaceCount}`);
    console.log(`=========== step 5: Print first and last character of the string ============`);
    var firstChar = resultTrim.charAt(0);
    var lastChar = resultTrim.charAt(removeSpaceLen-1);
    console.log(`the first character of the string is: ${firstChar} and the last character of the string is: ${lastChar}`);
    console.log(`============ step 6: total words available in the string ================`);
    var totalWords = resultTrim.split(" ");
    console.log(`the total words in the string is: ${totalWords}`);
    lengthOfWords = totalWords.length;
    console.log(`the count of the total number of wordsis: ${lengthOfWords}`);
    console.log(`=========== step 7: print the index of the word "good" in the string ===========`);
    var indexOfWord = resultTrim.indexOf("good");
    console.log(`the index of word "good" in the string is: ${indexOfWord}`);
    console.log(`=========== step 8: print the substring ===========`);
    var resultSubString = resultTrim.substring(22,removeSpaceLen);
    console.log(`the substring starting from index 22 is: ${resultSubString}`);
    console.log(`========== step 9: is string ends with word "up" =============`);
    var resultUp = resultTrim.includes("up");
    console.log(`is the string ends with word "up" : ${resultUp}`);
    console.log(`=========== step 10: is string starts with word "Hey" ==========`);
    var resultHey = resultTrim.includes("Hey");
    console.log(`is the string starts with word "Hey" : ${resultHey}`);

    
}
stringHandsOn();