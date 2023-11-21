
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import {CategoriesComponent} from './components/categories/categories.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { LayoutComponent } from './components/layout/layout.component';
import {PostComponent} from '../../shared/components/post/post.component';
import {CategoryComponent} from '../../shared/components/category/category.component';
import {PostResolver} from '../../shared/resolvers/post.resolver';
import {CategoryResolver} from '../../shared/resolvers/category.resolver';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'posts', component: PostsComponent, canActivate: [AuthGuard] },
      { path: 'posts/create', component: CreatePostComponent, canActivate: [AuthGuard] },
      { path: 'posts/:id/edit', component: EditPostComponent, canActivate: [AuthGuard] },
      {
        path: 'posts/:id',
        component: PostComponent,
        canActivate: [AuthGuard],
        resolve: {
          post: PostResolver
        }},

      { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] },
      { path: 'categories/create', component: CreateCategoryComponent, canActivate: [AuthGuard] },
      { path: 'categories/:id/edit', component: EditCategoryComponent, canActivate: [AuthGuard] },
      {
        path: 'categories/:id',
        component: CategoryComponent,
        canActivate: [AuthGuard],
        resolve: {
          category: CategoryResolver
        }}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
