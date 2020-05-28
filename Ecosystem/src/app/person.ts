export class Person {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    getFullName(): string{
        return this.firstName + " "+  this.lastName;
    }

    getAge():number{
        return this.age;
    }
}
