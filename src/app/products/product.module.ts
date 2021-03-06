import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductsDetailComponent } from './products-detail.component';

import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductsDetailComponent
  ],
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  
})
export class ProductModule { }
