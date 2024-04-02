class VehicleDetail{
    constructor(company,model,avg,price,color){
        this.company=company;
        this.model=model;
        this.avg=avg;
        this.price=price;
        this.color=color;
    }
    detailOfVehicle(){
        console.log(`Vehicle Data ---------------------
        Company Name:${this.company} 
        Model Of Vehicle:${this.model} 
        Avg Of Vehicle:${this.avg} 
        Price Of Vehicle:${this.price} 
        Color Of Vehicle:${this.color}`);
    }
}
//console.log(`======================== Vehicle Information =============================`);
const nexa = new VehicleDetail("Nexa","Baleno",28,110000,"Nexa Blue");
nexa.detailOfVehicle();

const marutiSuzuki=new VehicleDetail("Maruti Suzuki","Swift Desizer",22,100000,"White");
marutiSuzuki.detailOfVehicle();

const mahindra=new VehicleDetail("Mahindra","Thar",15,250000,"Black");
mahindra.detailOfVehicle();

const kia= new VehicleDetail("Kia","Seltos",20,110000,"Gray");
kia.detailOfVehicle();

const tata=new VehicleDetail("Tata Motors","Nexon",24,160000,"Blue");
tata.detailOfVehicle();

const array=[nexa,marutiSuzuki,mahindra,kia,tata]
for (const element of array) {
    console.log(element);
}
console.log(`===================== College Information =======================`);
class College{
    constructor(name,city,university,yearOfLaunch){
        this.name=name;
        this.city=city;
        this.university=university;
        this.yearOfLaunch=yearOfLaunch;
    }
    display(){
        console.log(`Information Of College -----------------
        College Name:${this.name}
        City:${this.city} 
        University:${this.university} 
        Year Of Launch:${this.yearOfLaunch}`);
    }
}
const mit=new College("MIT","Pune","Pune University",1978);
console.log(mit); 

const sit=new College("SIT","Ichalkaranji","Shivaji University",2011);
console.log(sit);

const wit=new College("WIT","Solapur","Solapur University",2008);
// wit.display();
console.log(wit);

const mksss=new College("MKSSS","Karve Nagar,Pune","Pune University",1970);
//mksss.display();
console.log(mksss);

const coep=new College("COEP","Pune","Pune University",1950);
//coep.display();
console.log(coep);
