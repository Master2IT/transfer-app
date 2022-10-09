import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Transfer from './transfer.interface'

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private url = 'http://localhost:5000/transfers/'

  constructor(private http: HttpClient) {}

  findAll(): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(this.url)
  }
  
  findByIdAndRemove(id: any): Observable<Transfer[]> {
    return this.http.delete<Transfer[]>(this.url + id)
  }
}
