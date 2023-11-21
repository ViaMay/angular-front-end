import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Category } from 'src/app/core/interfaces/category';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  category: Category;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ id }: { id: string }) =>
      this.categoriesService.findOne(id).pipe(
        tap((category: Category) =>
        {
          this.category = {...category, id };
        })
      ))
    ).subscribe();
  }

  submit(category: Category): void {
    this.categoriesService.update(category).pipe(
      tap(() => this.router.navigateByUrl('/admin/categories'))
    ).subscribe();
  }
}
