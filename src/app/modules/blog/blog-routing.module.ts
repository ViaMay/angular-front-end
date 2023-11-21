import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostComponent} from '../../shared/components/post/post.component';
import {PostsComponent} from './components/posts/posts.component';
import {LayoutComponent} from './components/layout/layout.component';
import {PostResolver} from '../../shared/resolvers/post.resolver';

const routes: Routes = [
{
  path: '',
  component: LayoutComponent,
  children: [
    { path: 'posts', component: PostsComponent },
    { path: 'posts/:id', component: PostComponent, resolve: {
        post: PostResolver
      }},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
