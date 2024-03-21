import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getFirstCountry() {
    return this.http
      .get<any>('https://restcountries.com/v3.1/all')
      .pipe(map((response: any[]) => response[0]));
  }
}
