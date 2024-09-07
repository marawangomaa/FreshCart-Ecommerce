import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ICategories } from '../../core/interfaces/icategories';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  private readonly _CategoriesService= inject(CategoriesService)
  private readonly _ActivatedRoute= inject(ActivatedRoute)


  getCategoiesSubscription !: Subscription

  catDetails:ICategories[]  = [] ;
  ngOnInit(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next: (res)=>{
        console.log(res);
        this.catDetails = res.data;
        
      },
      error: (err)=>{
        console.log(err);
        
      }
    })
  }



}
