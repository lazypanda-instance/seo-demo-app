import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DemoService {

  constructor(private http: HttpClient) { }

  getAllCountry(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/all');
  }

  getCountryDetails(countryName: string): Observable<any> {
    return this.http.get(`https://restcountries.com/v3.1/name/${countryName}`);
  }
}
