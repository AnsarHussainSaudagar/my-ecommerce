import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, DoCheck{
  title = "Shop"
  search = "";
  cartCount !: number;

  ngOnChanges(){
    // console.log("On Changes");
    
  }

  constructor(private dataService: DataService){
    this.cartCount = this.dataService.cartCount;
    // console.log("Constructor");
    
  }

  ngOnInit(){
    // console.log("on init");
    
  }

  ngDoCheck(){
    // console.log("Do Check");
    this.cartCount = this.dataService.cartCount;
  }



  onInput(event: any){
    console.log(event.data);
  }

  checkDisability(){
      return this.search === ""
  }
}
