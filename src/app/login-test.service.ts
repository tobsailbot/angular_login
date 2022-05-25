import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginTestService {

  constructor() {this.myMethod$ = this.myMethodSubject.asObservable(); }


  myMethod$: Observable<any>;
  private myMethodSubject = new BehaviorSubject<any>("");

  myMethod(data:any) {
      console.log(data); // I have data! Let's return it so subscribers can use it!
      // we can do stuff with data if we want
      this.myMethodSubject.next(data);
  }

    
}
