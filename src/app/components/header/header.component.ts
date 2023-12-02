import { Component, OnInit } from '@angular/core';
import { CurrentLanguage } from 'src/app/interfaces/current-language';
import { Leagues } from 'src/app/interfaces/leagues';
import { Standings } from 'src/app/interfaces/standings';
import { FootballService } from 'src/app/services/football.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  countriesSelected = [
    { name: 'England', idLeague: 39 },
    { name: 'Spain', idLeague: 107 },
    { name: 'Germany', idLeague: 78 },
    { name: 'France', idLeague: 61 },
    { name: 'Italy', idLeague: 135 },
  ];

  today = new Date();
  yearOfToday: number = 0;
  arrayOfStandings: Standings[] = [];

  isLoadedData: boolean = false;
  currentLeague!: CurrentLanguage;

  tabActive: any;
  paramsFromQuery!: { name: any; idLeague: any };
  constructor(
    private footballService: FootballService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.yearOfToday = this.today.getFullYear();
    sessionStorage.clear();
    this.tabActive = this.route.snapshot.queryParams['country'] || '';
    if (Object.keys(this.route.snapshot.queryParams).length > 0) {
      this.paramsFromQuery = {
        name: this.tabActive,
        idLeague: this.route.snapshot.queryParams['idLeague'] || '',
      };
      this.showTableForCountry(this.paramsFromQuery);
    }
  }

  showTableForCountry(item: any) {
    this.tabActive = item.name;
    this.footballService
      .getStandingsForCurrentSeason(this.yearOfToday, item.idLeague)
      .subscribe((res) => {
        this.isLoadedData = false;
        const arrayRes = res.response.map((standings) => standings as Leagues);
        for (let i of arrayRes) {
          this.currentLeague = {
            id: i.league.id,
            name: i.league.name,
            season: i.league.season as number,
            country: item.name,
          };
          sessionStorage.setItem(
            'currentLeague',
            JSON.stringify(this.currentLeague)
          );
          if (i.league.standings) {
            this.arrayOfStandings = i.league.standings[0];
            this.isLoadedData = true;
          }
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
              country: this.currentLeague.country,
              idLeague: this.currentLeague.id,
            },
            queryParamsHandling: 'merge',
          });
        }
      });
  }
}
