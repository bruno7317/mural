import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entry } from './entry/entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private readonly API = 'https://544bqkjis1.execute-api.us-west-2.amazonaws.com/guestbook';

  constructor(private http: HttpClient) {}

  list(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.API);
  }

  create(entry: Entry): Observable<Entry> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Entry>(this.API, entry, { headers });
  }

}
