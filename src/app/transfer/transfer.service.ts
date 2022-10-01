import { Injectable } from '@angular/core';
import Transfer from './transfer.interface'

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor() {}

  public headers: Array<string> = [
    'Account holder',
    'IBAN',
    'Date',
    'Amount',
    'Note',
  ];

  public transfers: Transfer[] = [
    {
      id: 1,
      account_holder: 'test',
      iban: 'test',
      amount: 10.99,
      date: '1994/17/09',
      note: 'test test test',
    },
    {
      id: 1,
      account_holder: 'test',
      iban: 'test',
      amount: 10.99,
      date: '1994/17/09',
      note: 'test test test',
    },
  ];

  public getHeaders(): Array<string> {
    return this.headers;
  }

  public getTransfers(): Transfer[] {
    return this.transfers;
  }
}
