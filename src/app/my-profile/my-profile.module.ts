import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressesComponent } from '../addresses/addresses.component';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { MyProfileComponent } from './my-profile.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateAddressComponent } from '../update-address/update-address.component';

const routes: Routes = [
  {
    path: '',
    component: MyProfileComponent,
    children: [
      { path: 'personal-details', component: PersonalDetailsComponent },
      { path: 'addresses', component: AddressesComponent },
    ],
  },
];

@NgModule({
  declarations: [
    MyProfileComponent,
    PersonalDetailsComponent,
    AddressesComponent,
    UpdateAddressComponent
  ],
  imports: [CommonModule,  RouterModule.forChild(routes), 
    ReactiveFormsModule
   ],
})
export class MyProfileModule {
  constructor(){
    
  }
}
