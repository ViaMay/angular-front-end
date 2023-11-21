import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/core/interfaces/post';
import { postProvider, POST_TOKEN } from './post.provider';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [
    postProvider
  ]
})
export class PostComponent {
  constructor(
    @Inject(POST_TOKEN) public readonly post: Observable<Post>
  ) {}
}
