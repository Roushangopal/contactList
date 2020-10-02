import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { contact } from './contact'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url = "http://localhost:3000/api/contacts"

  constructor(private http: HttpClient) { }

  //Retrieving contact
  getContact(): Observable<contact[]> {
    return this.http.get<contact[]>(this.url);
  }

  //Add Contact
  addContact(newContact): Observable<{}>{
    const httpoptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(this.url, newContact, httpoptions)
  }

  //Delete Contact
  deleteContact(id: string): Observable<{}>{
    const Url = `${this.url}/${id}`;
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
      };
    return this.http.delete(Url, httpoptions)
  }
}
