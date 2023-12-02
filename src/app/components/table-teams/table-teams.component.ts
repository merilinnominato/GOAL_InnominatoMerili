import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CurrentLanguage } from 'src/app/interfaces/current-language';
import { Standings } from 'src/app/interfaces/standings';

@Component({
  selector: 'app-table-teams',
  templateUrl: './table-teams.component.html',
  styleUrls: ['./table-teams.component.css'],
})
export class TableTeamsComponent implements OnInit {
  @Input()
  arrayOfStandings: Standings[] = [];

  @Input()
  country: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateTo(country: CurrentLanguage, item: Standings) {
    this.router.navigate([
      '/results-team',
      country.country,
      country.id,
      item.team.id,
    ]);
  }
}
