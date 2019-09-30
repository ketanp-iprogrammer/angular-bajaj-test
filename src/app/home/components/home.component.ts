import { Component, OnInit } from '@angular/core';
import TypeIt from 'typeit';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  /*
  Name Of Author : Ketan Pande
  Function Name : ngOnInit()
  Description : It is one of the lifecycle in angular. Integrating TypeIt package here with angular. 
                It should auto-type as soon as we load this component. 
*/
  ngOnInit() {
    let myTypeItInstance = new TypeIt('#myElement', {
      strings: ["Hello", "Welcome From", "BFL"],
      loop: true
    });
    myTypeItInstance.go();
  }

}
