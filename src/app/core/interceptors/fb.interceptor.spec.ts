import { TestBed } from '@angular/core/testing';

import { FbInterceptor } from './fb.interceptor';

describe('FbInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FbInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FbInterceptor = TestBed.inject(FbInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
