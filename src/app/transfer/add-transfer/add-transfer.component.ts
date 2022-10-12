import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'angular-iban';
import { ToastController } from '@ionic/angular';
import { Transfer } from '../transfer.interface';
// import { createTransfer } from 'src/app/state/transfers/transfer.actions';
import { select, Store } from '@ngrx/store';
import { addTransfer } from '../store/transfer.actions';
import { AppState } from 'src/app/store/app.state';
import { selectAppState } from 'src/app/store/app.selector';
import { Router } from '@angular/router';
import { setAPIStatus } from 'src/app/store/app.action';


@Component({
  selector: 'app-add-transfer',
  templateUrl: './add-transfer.component.html',
  styleUrls: ['./add-transfer.component.scss'],
})
export class AddTransferComponent implements OnInit {

  public reactiveForm!: FormGroup;

  public account_holder!: FormControl;
  public iban!: FormControl;
  public amount!: FormControl;
  public date!: FormControl;
  public note!: FormControl;

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private router: Router,
    private store: Store,
    private appStore: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.iban = new FormControl(
      null,
      [
        Validators.required,
        ValidatorService.validateIban
      ]
    );
    this.account_holder = new FormControl(null, [Validators.required]);
    this.amount = new FormControl(1, [Validators.required]);
    this.date = new FormControl(null, [Validators.required]);
    this.note = new FormControl(null, [Validators.required]);

    this.reactiveForm = this.fb.group({
      account_holder: this.account_holder,
      iban: this.iban,
      amount: this.amount,
      date: this.date,
      note: this.note
    });
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

  submitForm() {
    if (this.iban.errors?.['iban']) {
      this.showToast('IBAN is invalid', 'danger')
      return;
    }
    const form: Transfer = {
      account_holder: this.account_holder.value,
      iban: this.iban.value,
      amount: this.amount.value,
      date: this.date.value,
      note: this.note.value,
    }

    this.store.dispatch(addTransfer({ payload: { ...form } }))
    const appStatus$ = this.appStore.pipe(select(selectAppState))
    appStatus$.subscribe(data => {
      if (data.apiStatus === 'success') {
        this.showToast(data.apiResponse || 'Created Successfully!', 'success')
        this.appStore.dispatch(setAPIStatus({ status: { apiStatus: '', apiResponse: '' } }))
        setTimeout(() => {
          this.router.navigate(['transfer'])
        }, 1000);
      }
    })


    // this.transferService.submitForm(form).subscribe(
    //   (res: any) => {
    //     this.showToast(res.message, 'success')

    //     setTimeout(() => {
    //       this.router.navigate(['home'])
    //     }, 1000);
    //   },
    //   (err) => {
    //     this.showToast(err.error.message || err, 'danger')
    //     console.log(err);
    //   }
    // );
  }
}
