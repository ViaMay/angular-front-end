import { PostsService } from 'src/app/core/services/posts.service';
import { Post } from '../../core/interfaces/post';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { StoreService } from 'src/app/core/services/store.service';


@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post> {
  constructor(
    private readonly store: StoreService,
    private readonly postService: PostsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    this.postService
      .findOne(route.params.id)
      .pipe(
        tap((post: Post) => this.store.post$.next(post))
      )
      .subscribe();

    return null;
  }
}
