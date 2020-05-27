interface personOptions {
    firstName: string;
    lastName: string;
    age?: number;
    phoneNum?: string;
    state?: string;
    zip?: number;
    occupation?: string;
    hourlyRate?: number;
    hoursWorked?: number;
}

function makePerson(opt: personOptions): { firstName: string, lastName: string, age: number, phoneNum: string, state: string, zip: number, occupation: string, hourlyRate: number, hoursWorked: number } {
    let newPerson = { firstName: "jim", lastName: "bob", age: null,phoneNum:null,state: null, zip:null,occupation:null,hourlyRate:null,hoursWorked:null}
    newPerson.firstName=opt.firstName;
    newPerson.lastName=opt.lastName;
    if (opt.age) {
        newPerson.age = opt.age;
    }
    if(opt.phoneNum){
        newPerson.phoneNum=opt.phoneNum;
    }
    if(opt.phoneNum){
        newPerson.phoneNum=opt.phoneNum;
    }
    if(opt.state){
        newPerson.state=opt.state;
    }
    if(opt.zip){
        newPerson.zip=opt.zip;
    }
    if(opt.occupation){
        newPerson.occupation=opt.occupation;
    }
    if(opt.hourlyRate){
        newPerson.hourlyRate=opt.hourlyRate;
    }
    if(opt.hoursWorked){
        newPerson.hoursWorked=opt.hoursWorked;
    }
    return newPerson;
}

function printYeet(help: any):string {
    let returnString="";
    returnString =returnString+ help.firstName+ ", ";
    returnString =returnString+ help.lastName+ ", ";
    if( help.age != null){
        returnString= returnString+help.age+ ", ";
    }
    if( help.phoneNum != null){
        returnString= returnString+help.phoneNum+ ", ";
    }
    if( help.state!= null){
        returnString= returnString+help.state+ ", ";
    }
    if( help.zip != null){
        returnString= returnString+help.zip+ ", ";
    }
    if( help.occupation != null){
        returnString= returnString+help.occupation+ ", ";
    }
    if( help.hourlyRate != null){
        returnString= returnString+help.hourlyRate+ ", ";
    }
    if( help.hoursWorked != null){
        returnString= returnString+help.hoursWorked+ ", ";
    }
    return returnString;
}

let guy4 = makePerson({firstName: "Billy", lastName: "Goat", age:300});
console.log(guy4);
document.getElementById("div4").innerHTML = printYeet(guy4);