import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from  '@angular/router';
import { IProduct } from "./products";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute, 
              private router: Router, 
              private productService: ProductService) { }

  ngOnInit(): void {

    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }

  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err
    });
  }


  onBack(): void {
    this.router.navigate(["/products"]);
  }

  

  
    

}
