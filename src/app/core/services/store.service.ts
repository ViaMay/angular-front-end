import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../interfaces/post';
import { Category } from '../interfaces/category';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  post$: Subject<Post> = new Subject<Post>();
  posts$: Subject<Post[]> = new Subject<Post[]>();
  category$: Subject<Category> = new Subject<Category>();
  categories$: Subject<Category[]> = new Subject<Category[]>();
}
