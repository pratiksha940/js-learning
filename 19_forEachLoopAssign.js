class Employee {
    constructor (emp_id,emp_name,emp_dept,emp_salary,emp_company){
    this.emp_id=emp_id;
    this.emp_name=emp_name;
    this.emp_dept=emp_dept;
    this.emp_salary=emp_salary;
    this.emp_company=emp_company;
    
    
    }
}
const emp_anil= new Employee(123,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(234,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(345,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(456,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(567,"Monika","IT",40000,"Wipro");
const emp_vinayak= new Employee(678,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(789,"Mahesh","HR",85000,"Infy");

const arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahi];
arrayEmployees.forEach(element => {
    if (element.emp_company==="TCS") {
        //console.log(element.emp_company);
        console.log(`Employee Name:${element.emp_name}`);
        console.log(`Company Name:${element.emp_company}`);
    }
});

arrayEmployees.forEach(element => {
    if (element.emp_dept==="Finance") {
       // console.log(element.emp_dept);
       console.log(`Employee Name:${element.emp_name}`);
       console.log(`Department:${element.emp_dept}`);
    }
    
});


arrayEmployees.forEach(element => {
    if(element.emp_name.startsWith("R")){
        //console.log(element.emp_name);
        console.log(`Employee Name Starts with "R":${element.emp_name}`);
        //console.log(emp);
    }
});

arrayEmployees.forEach(element => {
    if (element.emp_salary>75000) {
        console.log(`Employees whose salary Greater than 75000: ${element.emp_name}`);
    }
});

console.log(`=============Employee name whose salary greater than 50000 and from IT department========`);
arrayEmployees.forEach(element => {
    if(element.emp_salary>=50000 && element.emp_dept==="IT"){
       console.log(`Employee Name:${element.emp_name},Employee Department:${element.emp_dept},Employee Id:${element.emp_id},Employee Company:${element.emp_company},Employee Salary:${element.emp_salary}`);
        
    }
});

console.log(`========= Employees From company Infy ============`);
arrayEmployees.forEach(element =>
{
    if (element.emp_company==="Infy") {
        console.log(`Employee Name:${element.emp_name},Employee Id:${element.emp_id},Employee Company:${element.emp_company},Employee Department:${element.emp_dept},Employee Salary:${element.emp_salary}`);
    }
})