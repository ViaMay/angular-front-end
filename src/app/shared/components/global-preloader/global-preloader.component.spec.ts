import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPreloaderComponent } from './global-preloader.component';

describe('GlobalPreloaderComponent', () => {
  let component: GlobalPreloaderComponent;
  let fixture: ComponentFixture<GlobalPreloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalPreloaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
