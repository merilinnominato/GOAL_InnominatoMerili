import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fixitures } from 'src/app/interfaces/fixitures';
import { Team } from 'src/app/interfaces/team';
import { FootballService } from 'src/app/services/football.service';

@Component({
  selector: 'app-results-team',
  templateUrl: './results-team.component.html',
  styleUrls: ['./results-team.component.css'],
})
export class ResultsTeamComponent implements OnInit {
  lastReaults = 10;
  idLeague!: string;
  country: any;
  idTeam: any;
  today = new Date();
  yearOfToday: number = 0;
  fixiture: Fixitures[] = [];
  team: Team[] = [];
  dataLoaded: boolean = false;
  currentLeague: any;
  idloaded: boolean = false;
  nameTeam: string = '';
  textError:string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private footballService: FootballService
  ) {}

  ngOnInit(): void {
    this.yearOfToday = this.today.getFullYear();
    this.route.paramMap.subscribe((p) => {
      this.idLeague = p.get('idLeague') as string;
      this.country = p.get('country');
      this.idTeam = p.get('idTeam');
      let cl = sessionStorage.getItem('currentLeague');
      if (cl) {
        this.currentLeague = JSON.parse(cl);
      }
      if(this.idTeam && this.idLeague){
        this.getFixitureForTeam(
          this.idTeam,
          this.yearOfToday,
          +this.idLeague,
          this.lastReaults
        );
      }
    
    });
  }

  goBack() {
    this.router.navigate(['/home'], {
      queryParams: { country: this.country, idLeague: this.idLeague },
      queryParamsHandling: 'merge',
    });
  }

  async getFixitureForTeam(
    team: number,
    season: number,
    league: number,
    last: number
  ) {
    this.dataLoaded = false;
    this.textError = ''
    let sessionteam = sessionStorage.getItem(team+'team');
    if(sessionteam){
      this.fixiture = JSON.parse(sessionteam)
      for(let i of this.team){
        this.nameTeam = i.team.name
      }
      if(this.fixiture.length > 0) {
        this.dataLoaded = true;
        this.idloaded = true;
        this.textError = 'Loaded'
      }
    } else {
    this.footballService.getTeamInformation(team).subscribe((res) => {
      this.team = res.response.map((team) => team as Team);
      if(this.team.length > 0){
        this.footballService
        .getFixitureForTeam(team, season, league, last)
        .subscribe((res) => {
          this.fixiture = res.response.map((fixiture) => fixiture as Fixitures);
          
          for(let i of this.team){
            this.nameTeam = i.team.name
          }
          if(this.fixiture.length > 0) {
            sessionStorage.setItem(team+'team', JSON.stringify(this.fixiture));
            this.dataLoaded = true;
            this.idloaded = true;
            this.textError = 'Loaded'
          } else {
            this.dataLoaded = false
            this.textError = res.errors.requests;
          }
        
        });
      } else {
        this.dataLoaded = false
        this.textError = res.errors.requests;
      }
    
    });
  }
  }
}
