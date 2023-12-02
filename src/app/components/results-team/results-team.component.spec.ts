import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsTeamComponent } from './results-team.component';

describe('ResultsTeamComponent', () => {
  let component: ResultsTeamComponent;
  let fixture: ComponentFixture<ResultsTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsTeamComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
