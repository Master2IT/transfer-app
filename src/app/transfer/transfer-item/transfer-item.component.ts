import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransferService } from '../transfer.service';
import {Transfer} from '../transfer.interface';
import { select, Store } from '@ngrx/store';
import { removeTransfer } from '../store/transfer.actions';
import { selectAppState } from 'src/app/store/app.selector';
import { AppState } from 'src/app/store/app.state';
import { setAPIStatus } from 'src/app/store/app.action';
// import { RemoveTransfer } from 'src/app/state/transfers/transfer.actions';

@Component({
  selector: 'app-transfer-item',
  templateUrl: './transfer-item.component.html',
  styleUrls: ['./transfer-item.component.scss']
})
export class TransferItemComponent implements OnInit {
  @Input() transfer? : Transfer
  @Output() getAll = new EventEmitter<string>();
  @Output() showToast = new EventEmitter<object>();

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  constructor(private store: Store, private appStore: Store<AppState>) { }

  ngOnInit(): void {
  }

  findByIdAndRemove({_id}: any){
    this.store.dispatch(removeTransfer({ id: _id }))

    const appStatus$ = this.appStore.pipe(select(selectAppState))
    appStatus$.subscribe(data => {
      if (data.apiStatus === 'success') {
        this.appStore.dispatch(setAPIStatus({ status: { apiStatus: '', apiResponse: '' } }))
        this.isModalOpen = false;
        this.getAll.emit();
      }
    })
  }
}
