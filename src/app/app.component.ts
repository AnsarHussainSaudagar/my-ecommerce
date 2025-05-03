import { Component, computed, signal } from '@angular/core';
import { Product } from './models/product.model';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  num : number = 1;

  isDisabled = false;
  name : any= "";

  myNum = signal(0)
  firstName = "omkar"
  lastName = "patil";
  
  constructor(private http: HttpClient){
    // console.log(this.myNum());
    // this.myNum.set(9);

    const fullName = computed(()=>{
      return this.firstName +  " "  + this.lastName
    });
    this.firstName = "jay"
    // console.log(fullName());
    
    
    
    

    // this.myNum.update(existingNum => {
    //   // console.log(existingNum);
    //   return ++existingNum;
    // });
    // console.log(this.myNum());
    
    
    
  }

  ngOnInit(){
    // this.http.get("https://fakestoreapi.com/products").subscribe({
    //   next: (product) => {
    //     console.log(product);
    //   }
    // });
      // const myObservable$ = new Observable((observer) => {
      //   observer.next(1);
      //   observer.next(2);
      //   // throw Error("My Error")

      //   setTimeout(() => {
      //     observer.next(3);
      //   }, 2000)

      //   observer.next(4);
      //   // observer.complete();
      //   observer.next(5);
      // });

      // const ofObservable$ = of(1, 2, 3, 4);
      // // console.log(ofObservable$);
      // ofObservable$.subscribe({
      //   error: (err) => {
      //     console.error(err);
      //   },
      //   complete: () => {
      //     console.log('My Observable is complete');
      //   },
      //   next: (val) => {
      //     console.log(val);
      //   },
      // });
      

      // myObservable$.subscribe(
      //   (num) => {
      //     console.log(num);
      //   }, (error) => {
      //     console.log(error);
      //   }, () => {
      //     console.log("My Observable is complete");
      //   }
      // );
      // myObservable$.subscribe({
      //   error: (err) => {
      //     console.error(err)
      //   },
      //   complete: () =>{
      //     console.log("My Observable is complete");
      //   },
      //   next: (val) => {
      //     console.log(val); 
      //   }
      // });

      
  }

  clickHandler(){
    this.num++; 
    console.log(this.num);
       
  }

  onClick(){
    console.log("Hello world");

  }
  
}



