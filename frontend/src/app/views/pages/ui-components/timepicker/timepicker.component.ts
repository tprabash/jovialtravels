import { Component, OnInit } from '@angular/core';

const defaultTimepicker = {
  htmlCode: 
`<ngb-timepicker [(ngModel)]="time"></ngb-timepicker>
      
<p class="text-muted mt-2">Selected time: {{time | json}}</p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent {
  time = {hour: 13, minute: 30};
}`
}

const meridian = {
  htmlCode: 
`<ngb-timepicker [(ngModel)]="time" [meridian]="true"></ngb-timepicker>
      
<p class="text-muted mt-2">Selected time: {{time | json}}</p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent {
  time = {hour: 13, minute: 30};
}`
}

const seconds = {
  htmlCode: 
`<ngb-timepicker [(ngModel)]="time" [seconds]="true" [meridian]="true"></ngb-timepicker>
      
<p class="text-muted mt-2">Selected time: {{time | json}}</p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent {
  time = {hour: 13, minute: 30, second: 20};
}`
}

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html'
})
export class TimepickerComponent implements OnInit {

  time = {hour: 13, minute: 30};
  timeWithSeconds = {hour: 13, minute: 30, second: 20};

  defaultTimepickerCode: any;
  meridianCode: any;
  secondsCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultTimepickerCode = defaultTimepicker;
    this.meridianCode = meridian;
    this.secondsCode = seconds;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
