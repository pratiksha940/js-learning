let professor={
    fullName:"Mr Shantinath Patil.",
    designation:"Assistant Professor",
    qualification:"M.A.B.Ed.NET",
    experience:10,
    emailId:"sp@gmail.com",
    address:"kolhapur",
    degrees:{
    degree: "M.A.(Marathi)",
    phd:"ADV Computing",
    masterDegree:"CSIR NET"     //Council of Scientific and Industrial Research(csir)
    },
    certificate:{
    arrayCertificate: ["Certificate in Advanced Computing","Certificate in NET exam","Certificate in CSIR NET exam"],
    }
}
console.log(professor);
console.log(`=============================== Degrees ===========================`);
console.log(professor.degrees);
console.log(`=============================== Certificate ========================`);
console.log(`Certificate: ${professor.certificate.arrayCertificate}`);
console.log(`============================= add properties total Experience ==================`);
professor.totalExperience = 15;
console.log(professor);
console.log(`Total Experience= ${professor.totalExperience}`);
console.log(`============================== Modify the Existing Property =====================`);
professor.address="pune";
console.log(`Modify the Address: ${professor.address}`);
console.log(`============================ add the element in the array at index 2 ===============`);
let result = professor.certificate.arrayCertificate.splice(2,0,"Oracle Certified");
console.log(`Certificate: ${professor.certificate.arrayCertificate}`);
console.log(`============================ log the last element in the array ==================`);
//let lastElement=professor.certificate.arrayCertificate.length-1;
console.log(professor.certificate.arrayCertificate[3]);
console.log(`==================== complete object ========================`);
console.log(professor);
console.log(`==================== traverse the array =====================`);
for (const iterator of professor.certificate.arrayCertificate) {
    console.log(iterator);
}