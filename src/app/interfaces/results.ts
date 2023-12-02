import { Countries } from './countries';
import { Fixitures } from './fixitures';
import { Leagues } from './leagues';
import { Standings } from './standings';
import { Team } from './team';

export interface Results {
  get: string;
  parameters: any;
  errors: { requests: string};
  results: number;
  paging: {
    current: number;
    total: number;
  };
  response: Array<Countries | Leagues | Standings | Fixitures | Team>;
}
