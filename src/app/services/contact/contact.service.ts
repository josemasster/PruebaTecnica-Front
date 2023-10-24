import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs';
import { Contact } from 'src/app/components/agenda/agenda.component';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {


  constructor(private http: HttpClient,) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  GetAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('http://localhost:3000/contact', this.httpOptions)
      .pipe(catchError((error: HttpErrorResponse) => {
        console.log(error);
        throw new Error('Error in Get');
      }));
  }

  CreateAContact(fullName: string, document: string, direction: string, PhoneNumber: string, Email: string): Observable<any[]> {
    
    const data = {
      fullName,
      document,
      direction,
      PhoneNumber,
      Email
    }
    return this.http.post<Contact[]>("http://localhost:3000/contact/", data, this.httpOptions)
      .pipe(catchError((error: HttpErrorResponse) => {
        console.log(error);
        throw new Error('Error in Post');
      }));
  }

  UpdateAContact(ID: string, fullName:string, document:string, direction:string, PhoneNumber:string, Email:string): Observable<Contact[]> {
    console.log(ID)
    const url = `http://localhost:3000/contact/${ID}`;
    const data = {
      fullName,
      document,
      direction,
      PhoneNumber,
      Email
    }
    return this.http.put<Contact[]>(url, data, this.httpOptions)
      .pipe(catchError((error: HttpErrorResponse) => {
        console.log(error);
        throw new Error('Error in Put');
      }));
  }

  DeleteAContact(ID: number): Observable<Contact[]> {
    const url = `http://localhost:3000/contact/${ID}`;
    return this.http.delete<Contact[]>(url, this.httpOptions)
      .pipe(catchError((error: HttpErrorResponse) => {
        console.log(error);
        throw new Error('Error in Delete');
      }));
  }



}
