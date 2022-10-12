import { Component, OnInit } from '@angular/core'
import { select, Store } from '@ngrx/store';
import { ToastController } from '@ionic/angular';
import { Router, Event, NavigationEnd } from '@angular/router';
import { loadTransfers } from './store/transfer.actions';
import { selectTransfers } from './store/transfer.selectors';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  transfers$ = this.store.pipe(select(selectTransfers))
  currentRoute: string

  constructor(private toastController: ToastController, private router: Router, private store: Store) {
    this.currentRoute = ""
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;
        if (this.currentRoute == '/transfer') this.getAll()
      }

    })
  }

  

  public headers: Array<string> = [
    'Account holder',
    'IBAN',
    'Date',
    'Amount',
    'Note',
  ];

  ngOnInit(): void {}

  refresh(ev: any) {
    setTimeout(() => {
      ev.detail.complete();
      this.store.dispatch(loadTransfers())
    }, 1000);
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
    this.store.dispatch(loadTransfers())
  }

}
