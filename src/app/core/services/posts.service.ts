import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  create(post: Post): Observable<Post> {
    return this.httpClient
      .post<{ name: string }>(`${environment.localUrl}/posts`, post)
      .pipe(
        map(({ name }: { name: string }) => ({
          ...post,
          id: name
        }))
      );
  }

  find(): Observable<Post[]> {
    // не работает
    const params = new HttpParams().set('orderBy', 'dateCreateAt');
    const options = {params};
    return this.httpClient
      .get<{ [id: string]: Post }>(`${environment.localUrl}/posts?`, options)
      .pipe(
        map(
          (res: { [id: string]: Post }) => Object
            .keys(res)
            .map((id: string) => ({
              id, ...res[id] ,
              tags: (res[id].tags as string).split(','),
            }))
        )
      );
  }

  findOne(id: string): Observable<Post> {
    return this.httpClient
      .get<Post>(`${environment.localUrl}/posts/${id}`)
      .pipe(
        map((post: Post) => ({ ...post, tags: (post.tags as string ).split(',') }))
      );
  }

  remove(id: string): Observable<null> {
    return this.httpClient.delete<null>(`${environment.localUrl}/posts/${id}`);
  }

  update(post: Post): Observable<Post> {
    return this.httpClient.patch<Post>(`${environment.localUrl}/posts/${post.id}`, post);
  }
}
