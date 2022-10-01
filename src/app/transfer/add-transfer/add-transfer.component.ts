import { Component, OnInit } from '@angular/core';
import Transfer from '../transfer.interface'
import { HttpClient } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.scss'],
})
export class AddTransferComponent implements OnInit {
  constructor(private http: HttpClient, private loadingCtrl: LoadingController) {}

  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }

  public form: Transfer = {
    account_holder: '',
    iban: '',
    amount: 0,
    date: '',
    note: '',
  };

  ngOnInit(): void {
    this.getData();
  }

  async loading(message?: string | null, dismiss?: boolean) {
    let loading: any;
    loading = await this.loadingCtrl.create({
      message: message || 'Creating transfer...'
    });

    if(dismiss){
      loading.dismiss();
    }

    loading.present();
  }

  clearForm(){
    this.form = {
      account_holder: '',
      iban: '',
      amount: 0,
      date: '',
      note: '',
    };
  }

  async getData() {
    console.log(123);
  }

  async submitForm() {
    this.loading()
    try {
      await this.http.post('/transfer/create', this.form).subscribe();
      this.clearForm();
      this.loading(null, true)
    } catch (error) {
      console.log(error);
      this.loading(null, true)
    }
  }
}
