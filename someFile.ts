// function sayHello(person: string): string {
//     return "Hello, " + person;
// }
// var user = "Super Student";
// document.getElementById("para").innerHTML = sayHello(user);

class person{
    private firstName: string;
    private lastName: string;
    private age: number;
    private phoneNum: string;
    private state: string;
    private zip: number;
    private occupation: string;
    private hourlyRate: number;
    private hoursWorked: number;
    private certs: string[]=[];

    constructor(firstName: string, lastName: string, age: number, phoneNum: string, state: string, zip: number, occupation: string, hourlyRate: number, hoursWorked?: number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.phoneNum=phoneNum;
        this.state=state;
        this.zip=zip;
        this.occupation=occupation;
        this.hourlyRate=hourlyRate;
        if ( hoursWorked ){
            this.hoursWorked=hoursWorked;
        }else{
            this.hoursWorked = 40;
        }

    }

    getFullName(): string{
        return this.firstName + " "+  this.lastName;
    }

    getCard(): string{
        return (this.getFullName() +
        "\n"+ this.phoneNum + 
        "\n"+ this.state + " "+ this.zip);
    }

    getFullInfo(){
        return (this.getFullName()  +
        "\n"+ this.age +
        "\n"+ this.phoneNum + 
        "\n"+ this.state + " "+ this.zip+
        "\n"+ this.occupation + 
        "\n"+ this.getPay()+
        "\n"+ this.getCerts());
    }

    getPay(): number{
        return (this.hourlyRate * this.hoursWorked);
    }

    addCerts(...argum:string[]): void{
        this.certs = this.certs.concat(argum);
    }
    getCerts():string[] {
        return this.certs;
    }
}
let guy = new person("Jack", "Smith", 25, "12323452", "AZ", 22195, "entertainer", 12.50);
let guy2 = new person("Rick", "Roll", 23, "23423552", "IL", 60012, "Banker", 15, 39);
let guy3 = new person("Adam", "Yeet", 68, "34562342", "CA", 23423, "surfer", 5);

guy.addCerts("mba, this one, another one");
document.getElementById("div1").innerHTML = guy.getFullInfo();
document.getElementById("div2").innerHTML = guy2.getFullInfo();
document.getElementById("div3").innerHTML = guy3.getFullInfo();
