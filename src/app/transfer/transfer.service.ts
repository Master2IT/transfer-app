import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from './transfer.interface'


@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private url = 'http://localhost:3002/api/transfer/'

  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  findAll(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(this.url)
  }

  findOne(id: string | null): Observable<Transfer> {
    return this.http.get<Transfer>(this.url + id, { headers: this.headers });
  }

  editTransfer(id: string | null, transfer: Transfer): Observable<Transfer> {
    return this.http.put<Transfer>(this.url + id, transfer, { headers: this.headers });
  }

  createTransfer(transfer: Transfer): Observable<Transfer> {
    return this.http.post<Transfer>(this.url, transfer, { headers: this.headers }); 
  }
  
  removeTransfer(id: any): Observable<Transfer[]> {
    return this.http.delete<Transfer[]>(this.url + id)
  }
}
