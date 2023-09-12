import { Component } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {}

  title = 'jquery-app';

  //an example of a jquery function
  //selectors make things much faster
  fade(){
    $("#heading1").fadeToggle(2000);
  }
  

}
