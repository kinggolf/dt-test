import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  phoneNumber = '';

  constructor() {}

  updatePhone(ev: any) {
    console.log('updatePhone, ev.detail.value = ', ev.detail.value);
  }

  dateSelectedBasic(ev: any) {
    console.log('dateSelectedBasic, ev.detail.value = ', ev.detail.value);
  }

  dateSelected(ev: any) {
    console.log('dateSelected, ev.detail.value = ', ev.detail.value);
  }

  cancel(ev: any) {
    console.log('cancel, ev = ', ev);
  }
}
