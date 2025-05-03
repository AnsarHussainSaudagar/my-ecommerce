import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Address } from '../models/address.model';
import { validateCity } from '../shared/city.validator';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent {
    addressForm: FormGroup;
    addresses : any;
    submitted =false;

    constructor(private fb: FormBuilder, private dataService: DataService){
      this.addressForm = this.fb.group({
        'city': ['', [Validators.required, validateCity]],
        'state' : [''],
        'country' : [''],
      })
    }

    ngOnInit(){
      this.addresses = this.dataService.getAddresses()
    }

    onSubmit(){
      // console.log(this.addressForm);
      this.submitted = true;
      
      if(this.addressForm.valid){
        const addressData :Address = this.addressForm.value;
        this.dataService.postAddresssData(addressData).subscribe({
          complete: () => {
            console.log("Address successfully submitted");
            
          }
        })
        
      }else{
        console.log("form is not valid");
        console.log(this.addressForm);
        
        
      }
    }

    onUpdate(){
      
    }
}
