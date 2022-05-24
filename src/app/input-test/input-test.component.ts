import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-test',
  templateUrl: './input-test.component.html',
  styleUrls: ['./input-test.component.css']
})

export class InputTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login_arr:any = {}

  consola:any;

   onSubmited(event:any) { // al enviar el formulario obtener valores y asignar a un objeto
     
    const formulario = event.target; 
     for (let i = 0; i < formulario.length; i++) {
       if(formulario[i].type === "text" || formulario[i].type === "password"){
         this.login_arr[formulario[i].id] = formulario[i].value;
       }
     }

     if (this.login_arr.user != "tobias" || this.login_arr.password != "1234") {
      this.consola = "ERROR! Usuario o contraseña incorrectos!";
     }
      else {
        this.consola = "CORRECTO! Usuario y contraseña correctos";
      }
      this.ngOnInit();

   }


}
