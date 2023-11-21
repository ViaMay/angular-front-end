import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from 'src/app/core/interfaces/post';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  constructor(
    private readonly postsService: PostsService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
  }

  submit(post: Post): void {
    this.postsService.create(post).pipe(
      tap(() => this.router.navigateByUrl('/admin/posts'))
    ).subscribe();
  }
}
