import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-testeoeo',
  templateUrl: './testeoeo.component.html',
  styleUrls: ['./testeoeo.component.css']
})
export class TesteoeoComponent implements OnInit {

  hide = false;

  constructor() { }

  ngOnInit(): void {

    this.bodyPut = this.bodyGet

  }

 
  bodyGet = {
    "nombre": "Tobsa",
    "apellido": "del Fosin",
    "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/300px-PNG_transparency_demonstration_1.png"
  }
  

  bodyPut = {
    "nombre": "",
    "apellido": "",
    "url": ""
  }



  onKey(event:any){
    
    //console.log(event.target.value);
    //console.log(event.target.name);
   
    const key = event.target.name as string;
    this.bodyPut[key as keyof typeof this.bodyPut] = event.target.value;
    console.log(this.bodyPut)


  }

  saveVal(){
    console.log(this.bodyPut)
    this.hide = false;

    this.ngOnInit;
  }

  editVal(){
    this.hide = true;
  }


}
