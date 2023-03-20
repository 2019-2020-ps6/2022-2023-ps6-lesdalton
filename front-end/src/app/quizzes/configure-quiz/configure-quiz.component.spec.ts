import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureQuizComponent } from './configure-quiz.component';

describe('ConfigureQuizComponent', () => {
  let component: ConfigureQuizComponent;
  let fixture: ComponentFixture<ConfigureQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigureQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigureQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
