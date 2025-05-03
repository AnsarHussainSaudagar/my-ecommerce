import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { authGuard } from './auth.guard';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes : Routes = [
  {path: '', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  {path: 'about-us', component: AboutUsComponent, title: 'About Us', canActivate: [authGuard]},
  {path: 'my-profile', loadChildren: () => import('./my-profile/my-profile.module').then(m => m.MyProfileModule), canActivate: [authGuard]},
  {path: 'not-allowed', component: NotAllowedComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: "**", redirectTo: 'not-found'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppRoutingModule { }
