class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil= new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha= new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_vinayak= new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

const arrayEmployees =[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_vinayak,emp_mahi];
console.log(`============= step 1:Employees from wipro company =============`);
let wipro=arrayEmployees.filter((element)=>{
    return element.emp_company==="Wipro";
    
}).map((element)=>{
    return element.emp_name;
}).forEach((element)=>{
    console.log(`Employee Name:${element}`);
})

console.log(`=============== step 2:Employees From IT and HR dept ==============`);
let itAndHr=arrayEmployees.filter((element)=>{
    return (element.emp_dept=="IT" || element.emp_dept=="HR");
}).map((element)=>{
    return element.emp_name;
}).forEach((element)=>{
    console.log(`Employee Name:${element}`);
})

console.log(`=========== step 3:Employees whose id is greater than 50 ============`);
let greater50=arrayEmployees.filter((element)=>{
    return (element.emp_id>50);
}).map((element)=>{
    return element.emp_name;
}).forEach((element)=>{
    console.log(`Employee Name:${element}`);
})

console.log(`================ step 4:Employees whose names start with letter A or V or M =============`);
let startWith = arrayEmployees.filter((element)=>{
    return element.emp_name.startsWith("A")|| element.emp_name.startsWith("V")|| element.emp_name.startsWith("M")
}).map((element)=>{
    return element.emp_name;
}).forEach((element)=>{
    console.log(`Employee Name:${element}`);
})

console.log(`============ step 5:Find average salary of all employees =============`);
let newArray=arrayEmployees.filter((element)=>{
    return (element.emp_dept=="IT" || element.emp_dept=="HR" || element.emp_dept=="Finance");
})
let avgSalary = newArray.reduce((total,currentValue)=>{
    return total+currentValue.emp_salary;
},0)
console.log(`Total Salary of Employees From All department:${avgSalary}`);
console.log(`Average salary of all Employees:${avgSalary/newArray.length}`);

console.log(`============ Find average salary of employees from IT department ==============`);
let itDeptAvgSalary=arrayEmployees.filter((element)=>{
    return element.emp_dept=="IT";
})
let itSalary=itDeptAvgSalary.reduce((salary,currentValue)=>{
    return salary+currentValue.emp_salary;
},0)
console.log(`Total Salary of Employees From IT department:${itSalary}`);
console.log(`Average salary of employees from IT department:${itSalary/itDeptAvgSalary.length}`);
