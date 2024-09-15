interface Location {
  name: string;
  url: string;
}

export enum Status {
  DEAD = 'Dead',
  ALIVE = 'Alive',
  UNKNOWN = 'unknown',
}

export enum Gender {
  FEMALE = 'Female',
  MALE = 'Male',
  GENDERLESS = 'Genderless',
  UNKNOWN = 'unknown',
}

export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
