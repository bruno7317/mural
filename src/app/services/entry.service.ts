import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entry } from '../components/entries/entry/entry';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private readonly API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  list(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.API);
  }

  create(entry: Entry): Observable<Entry> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Entry>(this.API, entry, { headers });
  }

}
