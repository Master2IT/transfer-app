import { Component, OnInit } from '@angular/core';
import { TransferService } from './transfer.service';
import { ToastController } from '@ionic/angular';
import Transfer from './transfer.interface';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  transfers: Transfer[] = []
  currentRoute: string

  public headers: Array<string> = [
    'Account holder',
    'IBAN',
    'Date',
    'Amount',
    'Note',
  ];

  constructor(private transferService: TransferService, private toastController: ToastController, private router: Router) {
    this.currentRoute = ""
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        // Hide progress spinner or progress bar
        this.currentRoute = event.url;          
        if(this.currentRoute == '/home') this.getAll()
      }

    })
   }

  ngOnInit(): void {}

  onShowToast({message, color}: any){
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
      this.transfers = res.data
    }, (err) => {
      this.showToast(err.error.message, 'danger')
      console.log(err);
    });
  }

}
