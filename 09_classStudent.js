class Student{
    constructor(name,rollNumber,division){
        this.name=name;
        this.rollNumber=rollNumber;
        this.division=division;
    }
    getDetails(){
        console.log(`Student Details= name:${this.name} rollNumber:${this.rollNumber} division: ${this.division}`);
    }
    }
    const ajay=new Student("Ajay",32,"A");
    ajay.getDetails();

    const amar=new Student("Amar",21,"B");
    amar.getDetails();
     
    const arya=new Student("Arya",44,"c");
    arya.getDetails();
