import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTeamsComponent } from './table-teams.component';

describe('TableTeamsComponent', () => {
  let component: TableTeamsComponent;
  let fixture: ComponentFixture<TableTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableTeamsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
