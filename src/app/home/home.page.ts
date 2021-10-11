import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  dateSelectedBasic(ev: any) {
    console.log('dateSelectedBasic, ev = ', ev);
  }

  dateSelected(ev: any) {
    console.log('dateSelected, ev = ', ev);
  }

  cancel(ev: any) {
    console.log('cancel, ev = ', ev);
  }
}
