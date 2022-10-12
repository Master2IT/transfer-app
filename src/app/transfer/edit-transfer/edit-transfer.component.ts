import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'angular-iban';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {Transfer} from '../transfer.interface';
import { select, Store } from '@ngrx/store';
import { selectTransferById } from '../store/transfer.selectors';
import { switchMap } from 'rxjs';
import { updateTransfer } from '../store/transfer.actions';
import { AppState } from 'src/app/store/app.state';
import { selectAppState } from 'src/app/store/app.selector';
import { setAPIStatus } from 'src/app/store/app.action';

@Component({
  selector: 'app-edit-transfer',
  templateUrl: './edit-transfer.component.html',
  styleUrls: ['./edit-transfer.component.scss']
})
export class EditTransferComponent implements OnInit {

  public reactiveForm!: FormGroup;

  public account_holder!: FormControl;
  public iban!: FormControl;
  public amount!: FormControl;
  public date!: FormControl;
  public note!: FormControl;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController,
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

    this.findOne()
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

  findOne() {
    const fetchFromData$ = this.route.paramMap.pipe(
      switchMap(param => {
        var id = String(param.get('id'));
        return this.store.pipe(select(selectTransferById(id)))
      })
    )

    fetchFromData$.subscribe((data: any) => {
      if(data){
        this.account_holder.setValue(data.account_holder)
      this.iban.setValue(data.iban)
      this.date.setValue(data.date)
      this.amount.setValue(data.amount)
      this.note.setValue(data.note)
      }else{
        this.router.navigate(['/transfer'])
      }
    })
  }

  submitForm() {
    if(this.iban.errors?.['iban']){
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

    const id = String(this.route.snapshot.paramMap.get('id'))
    this.store.dispatch(updateTransfer({ id, payload: { ...form } }))

    const appStatus$ = this.appStore.pipe(select(selectAppState))
    appStatus$.subscribe(data => {
      if (data.apiStatus === 'success') {
        this.showToast(data.apiResponse || 'Updated Successfully!', 'success')
        this.appStore.dispatch(setAPIStatus({ status: { apiStatus: '', apiResponse: '' } }))
        setTimeout(() => {
          this.router.navigate(['transfer'])
        }, 1000);
      }
    })
  }

}
