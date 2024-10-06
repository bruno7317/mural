import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entry } from '../components/entries/entry/entry';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private readonly API = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.error('API call failed:', error);
    return throwError(() => new Error('An error occurred with the API.'));
  }

  list(): Observable<Entry[]> {
    console.log('Fetching entries from API:', this.API);
    return this.http.get<Entry[]>(this.API).pipe(
      tap((entries) => {
        console.log('Entries received from API:', entries);
      }),
      catchError(this.handleError)
    );
  }

  create(entry: Entry): Observable<Entry> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    console.log('Sending new entry to API:', entry);
    return this.http.post<Entry>(this.API, entry, { headers }).pipe(
      tap((createdEntry) => {
        console.log('Entry created:', createdEntry);
      }),
      catchError(this.handleError)
    );
  }
}
