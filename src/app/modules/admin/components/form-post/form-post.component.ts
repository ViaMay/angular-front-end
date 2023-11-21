import { Post } from '../../../../core/interfaces/post';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {CategoriesService} from '../../../../core/services/categories.service';
import {delay} from 'rxjs/operators';
import {Category} from '../../../../core/interfaces/category';

@Component({
  selector: 'app-form-post',
  templateUrl: './form-post.component.html',
  styleUrls: ['./form-post.component.scss']
})
export class FormPostComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly categoriesService: CategoriesService
  ) {
  }

  @Input('post') set setPost(post: Post) {
    if (!post) {
      return;
    }
    this.post = post;
    this.form.patchValue(post);
  }

  form: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
    author: new FormControl(''),
    tags: new FormControl(''),
    dateCreateAt: new FormControl(''),
    categoryId: new FormControl(''),
  });

  post: Post;
  categories: Category [];
  @Output() onSubmit: EventEmitter<Post> = new EventEmitter<Post>();

  ngOnInit(): void {
    this.categoriesService.find().pipe(
      delay(1000)
    ).subscribe(
      (categories: Category[]) => {
        this.categories = categories;
      }
    );
  }

  submit(): void {
    console.log(this.post);
    if (this.form.invalid) {
      return;
    }
    if (!!this.post) {
      this.onSubmit.emit({
        id: this.post.id,
        ...this.form.value
      });
    }
    else {
      this.onSubmit.emit(this.form.value);
    }
  }
}
