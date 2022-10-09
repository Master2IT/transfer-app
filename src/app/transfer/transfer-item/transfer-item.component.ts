import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TransferService } from '../transfer.service';
import Transfer from '../transfer.interface';

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


  constructor(private transferService: TransferService) { }

  ngOnInit(): void {
  }

  findByIdAndRemove({_id}: any){
    this.transferService.findByIdAndRemove(_id).subscribe((res: any)=>{
      this.isModalOpen = false;
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
