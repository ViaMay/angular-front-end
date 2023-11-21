import { CategoriesService } from 'src/app/core/services/categories.service';
import { Category } from '../../core/interfaces/category';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StoreService } from 'src/app/core/services/store.service';


@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<Category> {
  constructor(
    private readonly store: StoreService,
    private readonly categoriesService: CategoriesService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    this.categoriesService
      .findOne(route.params.id)
      .pipe(
        tap((category: Category) => this.store.category$.next(category))
      )
      .subscribe();

    return null;
  }
}
