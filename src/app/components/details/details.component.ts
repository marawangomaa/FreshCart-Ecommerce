import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { IProducts } from '../../core/interfaces/iproducts';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailsComponent implements OnInit {

  private readonly _ActivatedRoute= inject(ActivatedRoute)
  private readonly _ProductsService= inject(ProductsService)

  detailProduct: IProducts | null = null;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (p)=>{
        let idProduct = p.get('id');

        this._ProductsService.getSpecificProducts(idProduct).subscribe({
          next: (res)=>{
            console.log(res.data);
            this.detailProduct = res.data;
            
          },
          error: (err)=>{
            console.log(err);
            
          }
        })
        
      }
    })
  }
  
}
