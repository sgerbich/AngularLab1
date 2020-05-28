import { Component, OnInit } from '@angular/core';
import { service } from '../service';
import { Person } from '../person';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.css']
})
export class CompTwoComponent implements OnInit {
  people: Person[];

  constructor(private serviceThis: service) { }

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.serviceThis.getPerson().subscribe(
      (response) => {
        this.people = response;
        console.log('observable is working'); },
      (error) => { console.log(error); }
    );
  }

}
