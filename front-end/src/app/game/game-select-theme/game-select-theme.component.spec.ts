import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSelectThemeComponent } from './game-select-theme.component';

describe('GameSelectThemeComponent', () => {
  let component: GameSelectThemeComponent;
  let fixture: ComponentFixture<GameSelectThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSelectThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameSelectThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
