import { Category } from '../../../../core/interfaces/category';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Component, OnInit } from '@angular/core';
import {delay, tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'nickname', 'actions'];

  public page: number;
  public pageSize = 10;
  public collectionSize: number;
  dataSource: Category [] = [];
  dataSourcePage: Category [] = [];

  constructor(
    private readonly router: Router,
    private readonly categoriesService: CategoriesService
  ) {
    this.page = 1;
  }

  ngOnInit(): void {
    this.categoriesService.find().pipe(
      delay(1000)
    ).subscribe(
      (categories: Category[]) => {
        this.dataSource = categories;
        this.collectionSize = this.dataSource.length;
        this.dataSourcePage = categories.filter((category, i) => i < this.pageSize);
      }
    );
  }

  remove(id: string): void {
    this.categoriesService.remove(id).pipe(
      tap(() => {
        this.dataSource = this.dataSource.filter((category: Category, i) => category.id !== id);
        this.dataSourcePage = this.dataSource.filter((category, i) => i < this.pageSize * this.page && i >=
          this.pageSize * (this.page - 1));
      }
      )
    ).subscribe();
  }

  onPageChanged(pageNumber: number): void  {
    console.log( pageNumber);
    this.page = pageNumber;
    this.dataSourcePage = this.dataSource.filter((category, i) => i < this.pageSize * pageNumber && i >=
      this.pageSize * (pageNumber - 1));
  }
}
