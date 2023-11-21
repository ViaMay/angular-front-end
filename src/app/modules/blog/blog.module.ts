import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from '../../shared/shared.module';
import { MatLegacyChipsModule } from "@angular/material/legacy-chips";
import { CdkDrag, CdkDropList } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [PostsComponent, LayoutComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        SharedModule,
        MatLegacyChipsModule,
        CdkDropList,
        CdkDrag
    ]
})
export class BlogModule { }
