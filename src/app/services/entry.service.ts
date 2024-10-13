import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entry } from '../components/entries/entry/entry';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private readonly API = environment.apiUrl;
  private readonly headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  list(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.API).pipe(
      catchError(this.handleError)
    );
  }

  create(entry: Entry): Observable<Entry> {
    return this.http.post<{ entry: Entry }>(this.API, entry, { headers: this.headers }).pipe(
      map(response => response.entry),
      tap(createdEntry => console.log('Entry created:', createdEntry)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('API call failed:', error);
    return throwError(() => new Error('An error occurred with the API.'));
  }
}
