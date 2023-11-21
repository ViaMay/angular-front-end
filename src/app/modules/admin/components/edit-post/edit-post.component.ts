import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Post } from 'src/app/core/interfaces/post';
import { PostsService } from 'src/app/core/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  post: Post;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({ id }: { id: string }) =>
      this.postsService.findOne(id).pipe(
        tap((post: Post) =>
        {
          this.post = {...post, id };
          this.post.tags = this.post.tags.toString();
        })
      ))
    ).subscribe();
  }

  submit(post: Post): void {
    this.postsService.update(post).pipe(
      tap(() => this.router.navigateByUrl('/admin/posts'))
    ).subscribe();
  }
}
