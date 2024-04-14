
// function add(num1,num2){
//     console.log(num1+num2);
// }
// var result=add(3,4);
// console.log(result);//output of result is undefined

// function add2(num3,num4){
//     let result=num3+num4;
//     return result;
// }
//  const result=add2(5,3);
// console.log(result);

function add(num1,num2){
    return num1+num2;
}
var result=add(4,5);
console.log(result);

function userName(name){
    return `${name},just logged in`;

}
userName();//output is nothing because the function with an argument and we call the function without argument
userName("Elon");//output is nothing because return the value can not store in a variable
var result=userName("stew"); //store the return value in variable and log the variable 
console.log(result);
console.log(userName("jenny"));//or direct log thefunction name with argument
console.log(userName());//output undefined,just logged in
console.log(userName(""));//output ,just logged in

function myName(myNameIs="sam"){//here we can use or set the default value when we dont pass the argument then the by default value is print if pass the argument then override and we get output argument value not default value
    // if (myNameIs===undefined) {
    //     console.log("please enter valid name");
    //     return;
    // }
    if (!myNameIs) {  //if myName is not there then if block is executed hence we use not operator for shortcut
        console.log(`please enter valid name`);
        return;
    }
    return`${myNameIs},just logged in`;
    

}
console.log(myName("sam"));

