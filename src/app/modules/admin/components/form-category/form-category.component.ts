import { Category } from '../../../../core/interfaces/category';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.scss']
})
export class FormCategoryComponent  {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    nickname: new FormControl('', Validators.required),
  });

  category: Category;

  @Output() onSubmit: EventEmitter<Category> = new EventEmitter<Category>();

  submit(): void {
    console.log(this.category);
    if (this.form.invalid) {
      return;
    }
    if (!!this.category) {
      this.onSubmit.emit({
        id: this.category.id,
        ...this.form.value
      });
    }
    else {
      this.onSubmit.emit(this.form.value);
    }
  }

  @Input('category') set setCategory(category: Category) {
    if (!category) {
      return;
    }
    this.category = category;
    this.form.patchValue(category);
  }
}
