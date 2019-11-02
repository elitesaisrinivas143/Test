import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: "date-picker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.scss"],
  // encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent implements OnInit{

  // myDateValue: Date;
  // bsConfig: Partial<BsDatepickerConfig>;
  // ngOnInit() {
  //   this.myDateValue = new Date();
  //   this.bsConfig = Object.assign({}, { containerClass: 'theme-green custom' });
  // }

  // bsInlineValue: Date;
  // bsInlineRangeValue: Date[];
  // minDate : Date;
  // maxDate : Date;

  // constructor() {
   
  //   this.minDate = new Date();
  //   this.maxDate = new Date();
  //   this.minDate.setDate(this.minDate.getDate());
  //   this.maxDate.setDate(this.maxDate.getDate() + 7);
  // }

  myDateValue: Date;
  bsConfig: Partial<BsDatepickerConfig>;
  ngOnInit() {
    this.myDateValue = new Date();
    // this.bsConfig = Object.assign({}, { containerClass: 'theme-green custom' });
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }

}
