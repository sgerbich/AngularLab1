import { Injectable } from '@angular/core';
import { Person } from './person';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class service {
    private people: Person[]=[
        new Person("sean","gerbich", 23),
        new Person("jack","smith",28),
        new Person("jenna", "rider", 45)
    ];

    constructor(){}

    getPerson():  Observable<Person[]> {
        console.log(of(this.people));
        return of(this.people.filter((person)=>{
            return person.getFullName+ " "+ person.getAge;
        }));
    }

}