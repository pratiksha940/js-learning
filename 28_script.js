

const elementProfile = document.getElementById("profile");
console.log(elementProfile);
console.log(elementProfile.innerHTML);

console.log(`======querySelector() with element name =======`);
const elementH2 = document.querySelector('h2');
console.log(elementH2);
console.log(elementH2.innerHTML);

console.log(`======querySelector() with id techStack =======`);
const elementTechStack = document.querySelector('#techStack');
console.log(elementTechStack.innerHTML);

console.log(`======querySelector() with class ui =======`);
const elementUI = document.querySelector('.ui');
console.log(elementUI.innerHTML);

console.log(`======querySelectorAll() with element name =======`);
const elementsLi = document.querySelectorAll('li');
for (const element of elementsLi) {
    console.log(element.innerHTML);
}

console.log(`======querySelectorAll() with class name =======`);
const elementsUi = document.querySelectorAll('.ui');
for (const element of elementsUi) {
    console.log(element.innerHTML);
}

console.log('Modifying an existing element text');
const techStackElement = document.querySelector('#techStack');
techStackElement.innerHTML = "My Expertise in UI";

console.log('Changing CSS ');
techStackElement.style.color = "orange";

const jsnode=document.querySelector("#skill");
const ulLiNode=document.querySelector("#js");
jsnode.removeChild(ulLiNode);
function eventClick(){
console.log("Hey.. he clicked me...");
}
// const addButton = document.querySelector('#add');
// addButton.addEventListener('click', ()=>{
//    console.log('Add button click...'); 
// });
const addButton = document.querySelector('#add');
addButton.addEventListener('click', ()=>{
  const num = prompt("Enter the valid number to perform square", 1);
  const elementPara = document.createElement('p');
  const textNodeSquare = document.createTextNode(`Number ${num} and it's square is ${num*num}`)
  elementPara.style.color= 'orange';
  elementPara.appendChild(textNodeSquare)
  const squareResultElement = document.querySelector('.square-result');
  squareResultElement.appendChild(elementPara);
});