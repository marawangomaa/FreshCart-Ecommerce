import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Subscription } from 'rxjs';
import { CommonModule, CurrencyPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { SearchPipe } from '../../core/pipe/search.pipe';
import { TermtextPipe } from '../../core/pipe/termtext.pipe';
import { SalePipe } from '../../core/pipe/sale.pipe';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { IBrand } from '../../core/interfaces/ibrand';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule , NgxPaginationModule , CarouselModule , RouterLink , FormsModule , SalePipe , TermtextPipe , SearchPipe , UpperCasePipe , LowerCasePipe , TitleCasePipe , CurrencyPipe],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit , OnDestroy {
 

  private readonly _BrandsService= inject(BrandsService)

  brandList:IBrand[] = [];
  

  getAllBrandsSubscription !: Subscription

ngOnInit(): void {
   this.getAllBrandsSubscription = this._BrandsService.getAllBrands().subscribe({
    next: (res)=>{
      console.log(res);
      this.brandList = res.data;
      
    },
    error: (err)=>{
      console.log(err);
    }
  })
}


ngOnDestroy(): void{
  this.getAllBrandsSubscription?.unsubscribe()
}




trackByFn(index: number, item: any): number {
  return index;  // Track by the index or use a unique property of `brand`
}

}
