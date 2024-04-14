console.log("=========== no argument no return ===========");
console.log("=========== step 1-01 =========");
function bankDetails() {
    var bankName = "SBI bank";
    var branchName = "Pune";
    console.log("Bank Name:",bankName);
    console.log("Branch Name:",branchName);
}
var result = bankDetails();

console.log("============ step 1-02 ===========");
function details() {
    var fullName = "Pratiksha Magdum";
    var bankAccountNo="435676543";
    console.log("Full Name is:",fullName);
    console.log("Bank Account No:",bankAccountNo);
}

var result = details();

console.log("======== function with arguments =========");
function personalDetails(firstName,lastName,collegeName) {
    console.log("My First Name is:",firstName);
    console.log("My Last Name is:",lastName);
    console.log("My College Name is:",collegeName);
}
personalDetails("Pratiksha","Magdum","MIT PUNE");
personalDetails("Sushant","Magdum","COEP PUNE");

console.log("=========== Function with argument and no return ==========");
function swapValues(num1,num2) {
    console.log("Before the swap values: ","num1=",num1,"num2=",num2);
    var temp=num1;
    num1=num2;
    num2=temp;
    console.log("After the swap values: ","num1=",num1,"num2=",num2);
    
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
swapValues("String",555);

console.log("============ function with three arguments =========");
function addThreeValues(num1,num2,num3){
    var result=num1+num2+num3;
    console.log("num1=",num1,"num2=",num2,"num3=",num3);
    console.log("Addition of three values: ",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello"," Good"," Morning");
addThreeValues(34,45,67.78);
