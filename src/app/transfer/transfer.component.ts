import { Component, OnInit } from '@angular/core';
import { TransferService } from './transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  constructor(private data: TransferService) {}

  ngOnInit(): void {
  }

  getHeaders() {
    return this.data.getHeaders();
  }

  getTransfers() {
    return this.data.getTransfers();
  }

}
