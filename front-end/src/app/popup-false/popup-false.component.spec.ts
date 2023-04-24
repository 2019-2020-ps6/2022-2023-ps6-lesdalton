import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFalseComponent } from './popup-false.component';

describe('PopupFalseComponent', () => {
  let component: PopupFalseComponent;
  let fixture: ComponentFixture<PopupFalseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupFalseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupFalseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
