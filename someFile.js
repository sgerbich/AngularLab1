// function sayHello(person: string): string {
//     return "Hello, " + person;
// }
// var user = "Super Student";
// document.getElementById("para").innerHTML = sayHello(user);
var person = /** @class */ (function () {
    function person(firstName, lastName, age, phoneNum, state, zip, occupation, hourlyRate, hoursWorked) {
        this.certs = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNum = phoneNum;
        this.state = state;
        this.zip = zip;
        this.occupation = occupation;
        this.hourlyRate = hourlyRate;
        if (hoursWorked) {
            this.hoursWorked = hoursWorked;
        }
        else {
            this.hoursWorked = 40;
        }
    }
    person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    person.prototype.getCard = function () {
        return (this.getFullName() +
            "\n" + this.phoneNum +
            "\n" + this.state + " " + this.zip);
    };
    person.prototype.getFullInfo = function () {
        return (this.getFullName() +
            "\n" + this.age +
            "\n" + this.phoneNum +
            "\n" + this.state + " " + this.zip +
            "\n" + this.occupation +
            "\n" + this.getPay() +
            "\n" + this.getCerts());
    };
    person.prototype.getPay = function () {
        return (this.hourlyRate * this.hoursWorked);
    };
    person.prototype.addCerts = function () {
        var argum = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            argum[_i] = arguments[_i];
        }
        this.certs = this.certs.concat(argum);
    };
    person.prototype.getCerts = function () {
        return this.certs;
    };
    return person;
}());
var guy = new person("Jack", "Smith", 25, "12323452", "AZ", 22195, "entertainer", 12.50);
var guy2 = new person("Rick", "Roll", 23, "23423552", "IL", 60012, "Banker", 15, 39);
var guy3 = new person("Adam", "Yeet", 68, "34562342", "CA", 23423, "surfer", 5);
guy.addCerts("mba, this one, another one");
document.getElementById("div1").innerHTML = guy.getFullInfo();
document.getElementById("div2").innerHTML = guy2.getFullInfo();
document.getElementById("div3").innerHTML = guy3.getFullInfo();
