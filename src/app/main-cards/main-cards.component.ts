import { Component, Input, OnChanges } from '@angular/core';
import { Product } from '../models/product.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.css'],
})
export class MainCardsComponent {
  number: number[] = [];
  name: string = '';
  count = 0;
  counts: any = [];
  names: any = [];

  createObj: Product = {
    name: '',
    img: '../../assets/images/playstation.jpg',
    description: '',
    price: 0,
  };

  private _search: string = '';

  products: any = [];

  constructor(private dataService: DataService, private router: Router) {}

  onClickProduct(product_id: any){
    this.router.navigate(['product', product_id], {queryParams: {is_available: 1}})
  }

  
  // private fetchProducts(){
  //   this.dataService.getData()
  //   // .subscribe((data : any) => {
  //   //   this.products = data;
  //   // });
  // }

  onClickDelete(id: any, e: any) {
    e.preventDefault()
    this.dataService.deleteProduct(id).subscribe({
      complete: () => {
        this.dataService.getData();
      },
    });
  }

  @Input('myNumber') num!: number;

  ngOnInit() {
    // console.log(`num in OnInit = ${this.num}`);
    this.dataService.getData();
    this.dataService.productSubject.subscribe((products) => {
      this.products = products;
    });
  }

  get search() {
    return this._search;
  }

  set search(value) {
    this._search = value;
  }

  currDate = new Date();

  onClickMe() {
    this.count++;
    this.counts.push(this.count);
  }

  onAddName() {
    this.names.push(this.name);
    // console.log(this.name);
  }

  onSubmit() {
    this.products.push(this.createObj);
  }

  onClickAddToCart() {
    this.dataService.cartCount++;
    // console.log(this.dataService.cartCount);
  }

  
}
