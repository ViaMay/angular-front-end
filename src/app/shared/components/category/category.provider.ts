import { Category } from '../../../core/interfaces/category';
import { Observable } from 'rxjs';
import { StoreService } from '../../../core/services/store.service';
import { InjectionToken, Provider } from '@angular/core';


export const POST_TOKEN: InjectionToken<Observable<Category>> = new InjectionToken<Observable<Category>>(
  'A stream with category data'
);

export const categoryProvider: Provider = {
  provide: POST_TOKEN,
  useFactory: (store: StoreService) => store.category$,
  deps: [StoreService]
};
