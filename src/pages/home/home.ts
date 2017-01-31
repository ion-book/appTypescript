import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Person, sum } from './person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log(sum(3,3));// 6
    console.log(sum(3)); // 7
    let nicolas: Person = new Person('Nicolas', 23, 'Medellin');
    let kattya: Person = new Person('Nicolas', 23);
    let name = nicolas.getName();
    nicolas.getName();
    let persons: Person[] = [];
    persons.push(nicolas);
    persons.push(kattya);
    console.log(name);
    console.log('city', nicolas.getCity());
    let result = persons.map(person => {
      person.age = 2;
      return person;
    });
    console.log([1,2,4,5,6].filter(item => item % 2 == 0));
    console.log(result);
  }

}
