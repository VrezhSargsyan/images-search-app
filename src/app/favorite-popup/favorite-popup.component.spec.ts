import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePopupComponent } from './favorite-popup.component';

describe('FavoritePopupComponent', () => {
  let component: FavoritePopupComponent;
  let fixture: ComponentFixture<FavoritePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
