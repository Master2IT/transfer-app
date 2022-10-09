import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Transfer from '../transfer.interface';

@Injectable({
  providedIn: 'root'
})
export class EditTransferService {

  private url = 'http://localhost:5000/transfers/'

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  findOne(id: string | null): Observable<Transfer> {
    return this.http.get<Transfer>(this.url + id, { headers: this.headers });
  }

  submitForm(id: string | null, form: Transfer): Observable<Transfer> {
    return this.http.put<Transfer>(this.url + id, form, { headers: this.headers });
  }
}
