import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigPopUpComponent } from './config-pop-up.component';

describe('ConfigPopUpComponent', () => {
  let component: ConfigPopUpComponent;
  let fixture: ComponentFixture<ConfigPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigPopUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
