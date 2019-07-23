import {Injectable} from '@angular/core';
import {Brewery} from "./brewery";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

const url = 'https://api.openbrewerydb.org/breweries';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  constructor(private http: HttpClient) {
  }

  getBreweries(): Observable<Brewery[]> {
    return this.http.get<Brewery[]>(url + "?by_city=harrisburg");
  }

  getBrewery(id: number): Observable<Brewery> {
    return this.http.get<Brewery>(url + "/" + id);
  }
}
