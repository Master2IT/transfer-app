import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  refresh(ev: any) {
    setTimeout(() => {
      ev.detail.complete();
      window.location.reload()
    }, 1000);
  }

  ngOnInit(): void {
  }

}
