import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  create(category: Category): Observable<Category> {
    return this.httpClient
      .post<{ name: string }>(`${environment.localUrl}/categories`, category)
      .pipe(
        map(({ name }: { name: string }) => ({
          ...category,
          id: name
        }))
      );
  }

  find(): Observable<Category[]> {
    return this.httpClient
      .get<{ [id: string]: Category }>(`${environment.localUrl}/categories?`)
      .pipe(
        map(
          (res: { [id: string]: Category }) => Object
            .keys(res)
            .map((id: string) => ({
              id, ...res[id]
            }))
        )
      );
  }

  findOne(id: string): Observable<Category> {
    return this.httpClient
      .get<Category>(`${environment.localUrl}/categories/${id}`);
  }

  remove(id: string): Observable<null> {
    return this.httpClient.delete<null>(`${environment.localUrl}/categories/${id}`)
  }

  update(category: Category): Observable<Category> {
    return this.httpClient.patch<Category>(`${environment.localUrl}/categories/${category.id}`, category).pipe(
        map(({ name }: { name: string }) => ({
            ...category,
            id: name
        }))
    );
  }
}
