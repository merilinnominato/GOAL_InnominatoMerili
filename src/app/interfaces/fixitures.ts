import { Leagues } from './leagues';

export interface Fixitures {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: Date;
    timestamp: number;
    periods: {
      first: number;
      second: number;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  league: Leagues;
  score: {
    fulltime: {
      home: number;
      away: number;
    };
  };
  teams: {
    away: {
      id: number;
      logo: string;
      name: string;
      winner: boolean;
    };
    home: {
      id: number;
      logo: string;
      name: string;
      winner: boolean;
    };
  };
}
