import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ResultsTeamComponent } from './components/results-team/results-team.component';
import { TableTeamsComponent } from './components/table-teams/table-teams.component';
import { FootballService } from './services/football.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultsTeamComponent,
    TableTeamsComponent,
    SpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [FootballService],
  bootstrap: [AppComponent],
})
export class AppModule {}
