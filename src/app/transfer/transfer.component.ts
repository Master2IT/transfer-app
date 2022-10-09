import { Component, OnInit } from '@angular/core';
import { TransferService } from './transfer.service';
import { ToastController } from '@ionic/angular';
import Transfer from './transfer.interface';
import { Router, Event, NavigationEnd } from '@angular/router';
import { AddTransferService } from './add-transfer/add-transfer.service';
import { v4 as uuidv4 } from 'uuid';

interface Header {
  text: string,
  value: string
}
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  transfers: Transfer[] = []
  currentRoute: string

  public headers: Header[] = [
    {
      text: 'Account holder',
      value: 'account_holder'
    },
    {
      text: 'IBAN',
      value: 'iban'
    },
    {
      text: 'Date',
      value: 'date'
    },
    {
      text: 'Amount',
      value: 'amount'
    },
    {
      text: 'Note',
      value: 'note'
    },
    {
      text: '',
      value: 'options'
    },
  ];

  constructor(private transferService: TransferService, private addTransferService: AddTransferService, private toastController: ToastController, private router: Router) {
    this.currentRoute = ""
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute == '/home') this.getAll()
      }

    })
  }

  ngOnInit(): void {}

  async addNewTransfer() {
    for (let i = 1; i <= 5; i++) {
        const transfer: Transfer = {
          id: uuidv4(),
          account_holder: 'Test-' + i,
          iban: 'DE12500105170648489890',
          amount: 1.111 * i,
          date: Date.now(),
          note: 'Long Test, Long Test, Long Test, Long Test, Long Test'
        }
        await this.addTransferService.createTransfer(transfer).subscribe()
    }

    this.getAll()
  }

  onShowToast({ message, color }: any) {
    this.showToast(message, color)
  }

  async showToast(message: string, color: string) {
    if (!message) return;
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color
    });

    await toast.present();
  }

  getAll() {
    this.transferService.findAll().subscribe((res: any) => {
      if (!res.length) this.addNewTransfer()

      this.transfers = res.reverse()
    }, (err) => {
      this.showToast(err.error.message, 'danger')
      console.log(err);
    });
  }

}
