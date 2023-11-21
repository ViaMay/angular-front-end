import { Post } from '../../../core/interfaces/post';
import { Observable } from 'rxjs';
import { StoreService } from '../../../core/services/store.service';
import { InjectionToken, Provider } from '@angular/core';


export const POST_TOKEN: InjectionToken<Observable<Post>> = new InjectionToken<Observable<Post>>(
  'A stream with post data'
);

export const postProvider: Provider = {
  provide: POST_TOKEN,
  useFactory: (store: StoreService) => store.post$,
  deps: [StoreService]
};
