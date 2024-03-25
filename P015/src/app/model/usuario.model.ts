export class Usuario {
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date
  ) {}

  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }
}

export interface IUser{
  name: string;
  nameFarm: string;
  email: string;
  Piggers?: IPig[];



}

export interface IPig{
  fatherEarTag: string;
  motherEarTag: string;
  dateOfBirth: string;
  dateOfDeparture: string;
  status: string;
  gender: 'M'|'F';
  weights?: IWeights[]
}

export interface IWeights{
  weight: number;
  date: string;
}
