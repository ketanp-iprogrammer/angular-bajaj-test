import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  loadAPI: Promise<unknown>;
  script_url = "assets/js/script.js";
  carousel_url = "assets/js/owl.carousel.min.js"

  constructor() { }

  /*
    Name Of Author : Ketan Pande
    Function Name : ngOnInit()
    Description : It is one of the lifecycle in angular. Loading the scripts file here. As we have used owl 
                  carousel package file and some animation scripts file. 
                  This is because when angular changes its route then it does not fire document.ready. 
                  That's why JS does not called. 
                  Adding in ngOnInit will solve the problem. It loads JS when ever your ngOnInit is being called.
  */
  ngOnInit() {
    this.loadAPI = new Promise(resolve => {
      this.loadCarousel();
      this.loadScript();
    });
  }

  /*
   Name Of Author : Ketan Pande
   Function Name : loadScript()
   Description : Explicitly loading the script.js file here to take the animation effect.
 */
  public loadScript() {
    let node = document.createElement("script");
    node.src = this.script_url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }


  /*
  Name Of Author : Ketan Pande
  Function Name : loadCarousel()
  Description : Explicitly loading the owl.carousel.min.js file here to take the parallax & carousel effect.
*/
  public loadCarousel() {
    let node = document.createElement("script");
    node.src = this.carousel_url;
    node.type = "text/javascript";
    node.async = true;
    node.charset = "utf-8";
    document.getElementsByTagName("head")[0].appendChild(node);
  }

}
