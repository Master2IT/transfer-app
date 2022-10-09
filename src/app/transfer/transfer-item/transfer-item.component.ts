import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransferService } from '../transfer.service';
import Transfer from '../transfer.interface';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-transfer-item',
  templateUrl: './transfer-item.component.html',
  styleUrls: ['./transfer-item.component.scss']
})
export class TransferItemComponent implements OnInit {
  @Input() transfer? : Transfer
  @Input() value? : string
  @Output() getAll = new EventEmitter<string>();
  @Output() showToast = new EventEmitter<object>();

  constructor(private transferService: TransferService, private alertController: AlertController) { }

  ngOnInit(): void {
  }

  async presentAlert(id: string) {
    const alert = await this.alertController.create({
      header: 'Are you sure to delete this transfer?',
      buttons: [
        {
          text: 'Nope!',
          cssClass: 'alert-button-cancel',
        },
        {
          text: 'Sure!',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.findByIdAndRemove(id)
          },
        },
      ],
    });

    await alert.present();
  }

  findByIdAndRemove(id: string){
    this.transferService.findByIdAndRemove(id).subscribe((res: any)=>{
      this.getAll.emit();
    }, (err)=>{
      this.showToast.emit({
        message: err.error.message, 
        color: 'danger'
      })
      console.log(err);
    })
  }

}
