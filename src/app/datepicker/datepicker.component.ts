import { Component } from "@angular/core";

@Component({
  selector: "date-picker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.scss"]
})
export class DatePickerComponent {
  bsInlineValue: Date;
  bsInlineRangeValue: Date[];
  minDate : Date;
  maxDate : Date;

  constructor() {
   ;
    this.minDate = new Date();
    this.maxDate = new Date();
    this.minDate.setDate(this.minDate.getDate());
    this.maxDate.setDate(this.maxDate.getDate() + 7);
  }

}
