import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entry } from './entry/entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private readonly API = 'http://localhost:3000/entries'

  constructor( private http: HttpClient ) { }

  list(): Observable<Entry[]> {
    return this.http.get<Entry[]>( this.API );
  }

  create( entry: Entry ):Observable<Entry> {
    return this.http.post<Entry>( this.API, entry )
  }

  delete( id: number ): Observable<Entry> {
    const url = `${this.API}/${id}`
    return this.http.delete<Entry>(url)
  }

  update( entry: Entry ): Observable<Entry> {
    const url = `${this.API}/${entry.id}`
    return this.http.put<Entry>(url, entry)
  }

  read( id: number ): Observable<Entry> {
    const url = `${this.API}/${id}`
    return this.http.get<Entry>(url)
  }
}
