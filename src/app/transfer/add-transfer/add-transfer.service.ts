import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Transfer from '../transfer.interface';

const headers = new HttpHeaders({ 
  'Content-Type': 'application/json' 
});

const url = 'http://localhost:3002/api/transfer'

@Injectable({
  providedIn: 'root'
})
export class AddTransferService {

  constructor(private http: HttpClient) { }


  submitForm(form: Transfer): Observable<Transfer> {
    return this.http.post<Transfer>(url, form, { headers }); 
  }
}
