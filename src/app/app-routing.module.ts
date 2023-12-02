import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ResultsTeamComponent } from './components/results-team/results-team.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`,
  { path: 'home', component: HeaderComponent },
  {
    path: 'results-team/:country/:idLeague/:idTeam',
    component: ResultsTeamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
