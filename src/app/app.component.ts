import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ // animaciones para elementos que ingresan al DOM
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter', 
          [
            style({ height: 0, opacity: 0 }),
            animate('0.2s ease-out', style({ height: 300, opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ height: 300, opacity: 1 }),
            animate('0.2s ease-in', style({ height: 0, opacity: 0 }))
          ]
        )
      ]
    )
  ]
})


export class AppComponent {
  title = 'como hacer un sitio web';
  
  login = false;

  is_user_logged_in = false;

  onClick() {
    this.login = !this.login;
  }

  receiveData(event:any) {
    console.log(event);
    this.login = !this.login;
    this.is_user_logged_in = true;
  }

}
