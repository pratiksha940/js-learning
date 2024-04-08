// function outer() {
//     let inner = function() {
//         console.log(`inner function`);
//     }
//     //let num=100;
//     //return num;
//     return inner;
// }
// let result=outer();
// //console.log(result);
// result();

var global = 300;
function outer(){
   let num2 = 200;
   let inner = function(){
        let num1 = 100;
        console.log(`Inner Function expression`);
        console.log(` num1: ${num1}`);
        console.log(` num2: ${num2}`);
        console.log(` global: ${global}`);
   }
  return inner;
}
// outer()();
let result = outer();
result();