import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm : FormGroup;
  submitted : boolean = false;
  constructor(private dataService: DataService){
    this.productForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(10)]),
      'description' : new FormControl(''),
      'price' : new FormControl(''),
    })
  }

  onSubmit(){
    this.submitted = true;
    // console.log(productForm.valid);
    console.log(this.productForm.controls['name']);
    
    if(this.productForm.valid){
      const productData = this.productForm.value

      this.dataService.postData(productData).subscribe({
        complete: ()=> {
          this.dataService.getData();
          this.productForm.reset();
          this.submitted = false
        }
      });
    } else{ 
      console.log("your form is invalid");
      
    }
    
  }
  // Template driven
  // onSubmit(productForm: any){
  //   // console.log(productForm.valid);
  //   console.log(productForm.controls);
    
  //   if(productForm.valid){
  //     const productData = productForm.value

  //     this.dataService.postData(productData).subscribe({
  //       complete: ()=> {
  //         this.dataService.getData();
  //       }
  //     });
  //   } else{ 
  //     console.log("your form is invalid");
      
  //   }
    
  // }
}
