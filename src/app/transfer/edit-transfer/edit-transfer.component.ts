import { Component, OnInit } from '@angular/core';
import { EditTransferService } from './edit-transfer.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'angular-iban';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import Transfer from '../transfer.interface';

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
    private transferService: EditTransferService,
    private router: Router,
    private route: ActivatedRoute,
    private toastController: ToastController
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
    const id = this.route.snapshot.paramMap.get('id')

    this.transferService.findOne(id).subscribe((res: any) => {
      this.account_holder.setValue(res.data.account_holder)
      this.iban.setValue(res.data.iban)
      this.date.setValue(res.data.date)
      this.amount.setValue(res.data.amount)
      this.note.setValue(res.data.note)
    }, (err) => {
      this.showToast(err.error.message, 'danger')
      console.log(err);
    });
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
    const id = this.route.snapshot.paramMap.get('id')
    this.transferService.submitForm(id, form).subscribe(
      (res: any) => {
        this.showToast('Successfully updated!', 'success')

        setTimeout(() => {
          this.router.navigate(['home'])
        }, 1000);
      },
      (err) => {
        this.showToast(err.error.message, 'danger')
        console.log(err);
      }
    );
  }

}
