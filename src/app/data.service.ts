import { Injectable, signal } from '@angular/core';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { map, Subject, } from 'rxjs';
import { Address } from './models/address.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private ENDPOINT = environment.API_URL;
  private PRODUCTS_API_LINk = this.ENDPOINT + 'products';
  private ADDRESS_API_LINk = this.ENDPOINT + 'addresses';
  cartCount: number = 0;

  isLoggedIn = true;

  public mainArr: Product[] = [];

  constructor(private http: HttpClient) {}

  public productSubject = new Subject();
  public productSignal = signal([]);

  getData() {
    this.http.get(this.PRODUCTS_API_LINk).pipe(
      map((data: any) => {
        
        const mapData = data.map((prod: any) => {
          return {
            ...prod,
            price: prod.price * 85.53,
          };
        });

        return mapData;
      })
    ).subscribe({
      next: (products) => {
        this.productSubject.next(products);        
        // this.productSignal.set(products)
        // console.log(this.productSignal());
        
      }
    })
    // .subscribe((data) => {
    //   this.dataSubject.next(data);
    // })
  }

  getSingleProduct(id : number){
    return this.http.get(this.PRODUCTS_API_LINk + "/" + id);
  }

  postData(product: Product) {
    return this.http.post(this.PRODUCTS_API_LINk, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.PRODUCTS_API_LINk + '/' + id);
  }

  postAddresssData(address: Address) {
    return this.http.post<Address>(this.ADDRESS_API_LINk, address);
  }

  getAddresses(){
    return this.http.get<Address[]>(this.ADDRESS_API_LINk);
  }

  updateAddress(id : number , value: any){
    return this.http.put(this.ADDRESS_API_LINk + "/" + id, value)
  }
}
