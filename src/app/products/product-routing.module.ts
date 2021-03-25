import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductsDetailComponent } from './products-detail.component';
import { ProductsDetailGuard } from './products-detail.guard';



@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      { 
        path: "products/:id",
        canActivate: [ProductsDetailGuard], 
        component: ProductsDetailComponent 
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
