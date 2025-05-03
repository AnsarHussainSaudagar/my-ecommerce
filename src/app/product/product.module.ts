import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardsComponent } from '../main-cards/main-cards.component';
import { ProductComponent } from './product.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes : Routes = [
  {path: '', component: MainCardsComponent, title: "Home"},
  {path: 'product/:product_id', component: ProductComponent, title: "Product"},
];

@NgModule({
  declarations: [
    MainCardsComponent,
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    MainCardsComponent,
    ProductComponent,
    AddProductComponent
  ]
})
export class ProductModule { }
