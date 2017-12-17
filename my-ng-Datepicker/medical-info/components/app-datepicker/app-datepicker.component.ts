import { Component } from '@angular/core';
import { DatepickerOptions } from '../../ng-datepicker/ng-datepicker.component';
import * as enLocale from 'date-fns/locale/en';
import * as frLocale from 'date-fns/locale/fr';

@Component({
  selector: 'app-datepicker',
  templateUrl: 'app-datepicker.html',
})
export class AppDatepickerComponent {

  date: Date;
  options: DatepickerOptions = {
    minYear: 1970,
    maxYear: 2030,
    displayFormat: 'YYYY.MM.DD',
    barTitleFormat: 'MMMM YYYY',
    firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
    locale: frLocale
  };
  constructor() {
    this.date = new Date();
  }
}
