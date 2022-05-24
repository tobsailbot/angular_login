import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  hide = false;
  
  bodyGet = {
    "nombre": "Tobsa",
    "apellido": "del Fosin",
    "edad": "27"
  }

  bodyPut = {
    "nombre": "",
    "apellido": "",
    "edad": ""
  }


  constructor() { }

  ngOnInit(): void {

    // console.log(Object.keys(this.bodyPut)[0]);
  }

  @ViewChild('nombre')
  nombre!: ElementRef<any>;

  @ViewChild('apellidoElem')
  apellidoElem! : ElementRef<any>;

  @ViewChild('edadElem') 
  edadElem! : ElementRef<any>;

  putValues(): void {

    // get the html element values, text input and save to the bodyPut object
    this.bodyPut.nombre = this.nombre.nativeElement.value;
    this.bodyGet.nombre = this.nombre.nativeElement.value;

    // this.bodyPut.apellido = this.apellidoElem.nativeElement.innerHTML;
    // this.bodyPut.edad = this.edadElem.nativeElement.value;

    console.log(this.bodyPut);
    this.hide =false;
    this.ngOnInit;
  }

  editValues(){
    this.hide = true;
  }


}


