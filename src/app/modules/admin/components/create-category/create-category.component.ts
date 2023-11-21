import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { Category } from 'src/app/core/interfaces/category';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
  }

  submit(category: Category): void {
    this.categoriesService.create(category).pipe(
      tap(() => this.router.navigateByUrl('/admin/categories'))
    ).subscribe();
  }
}
