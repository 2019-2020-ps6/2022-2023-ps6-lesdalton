import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupTrueComponent } from './popup-true.component';

describe('PopupTrueComponent', () => {
  let component: PopupTrueComponent;
  let fixture: ComponentFixture<PopupTrueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupTrueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupTrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
