import { Component } from '@angular/core';
import { IButton } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zahl: number = 1;
  title = 'app';
  list: number[] = [1,2,3]; 
  name: string = 'Hallo Test';
  toDoListe: string[] = []; 

  constructor() {

    console.log(this.name);
    console.log(this.zahl);

    setInterval(() => {

      this.zahl += 1;

    }, 100);
  }
  
  listAdd(x) {
    this.list.push(x);
    console.log(x);
    console.log(this.list);
  }

  toDoAdd(toDo) {
    this.toDoListe.push(toDo);

  }
}

