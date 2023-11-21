import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/core/interfaces/category';
import { categoryProvider, POST_TOKEN } from './category.provider';

@Component({
  selector: 'app-post',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [
    categoryProvider
  ]
})
export class CategoryComponent {
  constructor(
    @Inject(POST_TOKEN) public readonly category: Observable<Category>
  ) {}
}
