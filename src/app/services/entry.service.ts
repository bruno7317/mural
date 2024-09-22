import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entry } from '../components/entries/entry/entry';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private readonly API = environment.apiUrl;

  private staticEntries: Entry[] = [
    { id: 'a94a8fe5ccb19ba61c4c0873d391e987982fbbd3', name: 'Alice', message: 'Hello, this is a static message from Alice.', timestamp: '2024-09-19T12:00:00' },
    { id: '81dc9bdb52d04dc20036dbd8313ed055', name: 'Bob', message: 'Bob says hi! This is another static message.', timestamp: '2024-09-19T13:00:00' },
    { id: '1c383cd30b7c298ab50293adfecb7b18', name: 'Charlie', message: 'Charlie’s message is also static.', timestamp: '2024-09-19T14:00:00' }
  ];

  constructor(private http: HttpClient) {}

  list(): Observable<Entry[]> {
    return of(this.staticEntries);
  }

  create(entry: Entry): Observable<Entry> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Entry>(this.API, entry, { headers });
  }
}
