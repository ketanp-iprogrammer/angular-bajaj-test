import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as typeformEmbed from '@typeform/embed';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  
})
export class UserDetailComponent implements OnInit, AfterViewInit {
  constructor() { }

  /*
  Name Of Author : Ketan Pande
  Function Name : ngOnInit()
  Description : It is one of the lifecycle in angular. 
*/
  ngOnInit() {

  }

  /*
    Name Of Author : Ketan Pande
    Function Name : ngOnInit()
    Description : It is also  one of the lifecycle in angular. Here I have used the npm package of typeform for angular
                  Calling it once the view gets initialized, will add the typeform widget to the DOM.
                  I have created a custom form in typeform and wrapped it up here in that plugin in order to use
                  it according to the requirement. 
                  Note : Angular Plugin is used here for typeform. 
  */
  ngAfterViewInit(): void {
    const wrapper = document
      .querySelector('#tf')
    typeformEmbed.makeWidget(
      wrapper,
      'https://ketan165174.typeform.com/to/SwuLQ7',
      {
        hideHeaders: true,
        hideFooter: true,
        opacity: 75,
        buttonText: "What is your quest?"
      }
    )
  }

}
