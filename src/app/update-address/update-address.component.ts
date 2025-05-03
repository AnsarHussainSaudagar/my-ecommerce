import { Component, Input } from '@angular/core';
import { Address } from '../models/address.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent {
  @Input() address !: Address;

  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService){
    this.addressForm = this.fb.group({
      'city': ['', [Validators.required]],
      'state' : [''],
      'country' : [''],
    })
  }

  ngOnInit(){
    this.addressForm.patchValue(this.address)
  }
  onUpdate(id : any){
      const updatedAdress = this.addressForm.value;
      this.dataService.updateAddress(id, updatedAdress).subscribe({
        complete: () =>{
          console.log("Address successfully updated");
          
        }
      })
     
  }
}
