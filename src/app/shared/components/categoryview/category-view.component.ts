import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../../core/interfaces/category';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  styleUrls: ['./category-view.component.scss']
})
export class CategoryViewComponent implements OnInit {

  @Input() category: Category;
  constructor() { }

  ngOnInit(): void {
  }
}
