import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestbookService {
  private apiUrl = 'https://544bqkjis1.execute-api.us-west-2.amazonaws.com/guestbook';

  constructor(private http: HttpClient) {}

  getGuestbookEntries(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addGuestbookEntry(name: string, message: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { name, message };
    return this.http.post(this.apiUrl, body, { headers });
  }
}
