import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { LayoutComponent } from './components/layout/layout.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [PostsComponent, LayoutComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
