const personJSON=`{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street":"32,Laham st.",
        "city":"Innsbruck",
        "country":"Austria"
    },
    "referred-by":"E0012"
}`;

const person ={
    name:"Aleix Melon",
    id:"E00245",
    role:["Dev","DBA"],
    age:23,
    doj:"11-12-2019",
    married:false,
    address:{
        street:"32,Laham st.",
        city:"Innsbruck",
        country:"Austria"
    },
    referred_by:"E0012"
};
console.log(`============== step 1: convert the JSON into object ===================`);
let result=JSON.parse(personJSON);
console.log(result);
console.log(`=================== step 2: log the "Dev" ===========================`);
console.log(person.role[0]); 
console.log(`================ step 3: log only last name =========================`);
console.log(person.name.slice((0,6)));
console.log(`================= step 4: log the joining year of employee ================`);
console.log(person.doj.slice(6,10));

