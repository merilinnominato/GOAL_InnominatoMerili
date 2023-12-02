import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Results } from '../interfaces/results';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  standings = '../../assets/standings.json';
  fixitures = '../../assets/fixitures.json';
  team = '../../assets/team.json';

  headers = {
    'x-rapidapi-host': environment.host,
    'x-rapidapi-key': environment.apiKey,
  };

  constructor(private httpClient: HttpClient) {}

  getStandingsForCurrentSeason(year: number, idLeague: number) {
    // return this.httpClient.get<Results>(this.standings)

    const params = new HttpParams()
      .set('season', year.toString())
      .set('league', idLeague.toString());

    return this.httpClient.get<Results>(environment.api + '/standings', {
      headers: this.headers,
      params: params,
    });
  }

  getFixitureForTeam(
    team: number,
    season: number,
    league: number,
    last: number
  ) {
    //  return this.httpClient.get<Results>(this.fixitures)

    const params = new HttpParams()
      .set('team', team.toString())
      .set('season', season.toString())
      .set('league', league.toString())
      .set('last', last.toString());

    return this.httpClient.get<Results>(environment.api + '/fixtures', {
      headers: this.headers,
      params: params,
    });
  }

  getTeamInformation(team: number) {
    // return this.httpClient.get<Results>(this.team)

    const params = new HttpParams().set('id', team.toString());

    return this.httpClient.get<Results>(environment.api + '/teams', {
      headers: this.headers,
      params: params,
    });
  }
}
