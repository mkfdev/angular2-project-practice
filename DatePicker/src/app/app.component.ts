import { Component } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';

@Component({
  selector: 'app-root',
  template: `
  <form #myForm="ngForm" novalidate>
      <div class="datepicker">
      <my-date-picker name="mydate" [options]="myDatePickerOptions"
                      [(ngModel)]="model" required></my-date-picker>
      </div>
  </form>
  `,
  styles: [`
    .datepicker{
      width:150px;
    }
  `]
})
export class AppComponent {
  public myDatePickerOptions: MyDatePickerModule = {
    // other options...
    dateFormat: 'yyyy.mm.dd',
  };

  // Initialized to specific date (09.10.2018).
  public model: any = { date: { year: 2017, month: 12, day: 2 } };

  constructor() { }
}
