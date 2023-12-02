import { Countries } from './countries';
import { Fixitures } from './fixitures';
import { Leagues } from './leagues';
import { Standings } from './standings';
import { Team } from './team';

export interface Results {
  get: string;
  parameters: Array<any>;
  errors: Array<any>;
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: Array<Countries | Leagues | Standings | Fixitures | Team>;
}
