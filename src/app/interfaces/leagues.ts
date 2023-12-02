import { Countries } from './countries';
import { Standings } from './standings';

export interface Leagues {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
    season?: number;
    flag?: string;
    standings?: Array<Standings[]>;
  };
  country?: Countries;
  seasons?: Array<any>;
}
