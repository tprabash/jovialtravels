import { Component, OnInit } from '@angular/core';

const borderSpinner = {
  htmlCode: 
`<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html'
})
export class SpinnersComponent {}`
}

const spinnerColors = {
  htmlCode: 
`<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-light" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html'
})
export class SpinnersComponent {}`
}

const growingSpinner = {
  htmlCode: 
`<div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html'
})
export class SpinnersComponent {}`
}

const spinnerAlign1 = {
  htmlCode: 
`<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html'
})
export class SpinnersComponent {}`
}

const spinnerAlign2 = {
  htmlCode: 
`<div class="d-flex align-items-center">
  <strong>Loading...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html'
})
export class SpinnersComponent {}`
}

const spinnerAlign3 = {
  htmlCode: 
`<div class="clearfix">
  <div class="spinner-border float-end" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html'
})
export class SpinnersComponent {}`
}

const spinnerAlign4 = {
  htmlCode: 
`<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html'
})
export class SpinnersComponent {}`
}

const spinnerSize = {
  htmlCode: 
`<div class="spinner-border spinner-border-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
<div class="spinner-grow spinner-grow-sm" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html'
})
export class SpinnersComponent {}`
}

const buttonBorderSpinner = {
  htmlCode: 
`<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html'
})
export class SpinnersComponent {}`
}

const buttonGrowingSpinner = {
  htmlCode: 
`<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="visually-hidden">Loading...</span>
</button>
<button class="btn btn-primary" type="button" disabled>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  Loading...
</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html'
})
export class SpinnersComponent {}`
}

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html',
  preserveWhitespaces: true
})
export class SpinnersComponent implements OnInit {

  borderSpinnerCode: any;
  spinnerColorsCode: any;
  growingSpinnerCode: any;
  spinnerAlign1Code: any;
  spinnerAlign2Code: any;
  spinnerAlign3Code: any;
  spinnerAlign4Code: any;
  spinnerSizeCode: any;
  buttonBorderSpinnerCode: any;
  buttonGrowingSpinnerCode: any;

  constructor() { }

  ngOnInit(): void {
    this.borderSpinnerCode = borderSpinner;
    this.spinnerColorsCode = spinnerColors;
    this.growingSpinnerCode = growingSpinner;
    this.spinnerAlign1Code = spinnerAlign1;
    this.spinnerAlign2Code = spinnerAlign2;
    this.spinnerAlign3Code = spinnerAlign3;
    this.spinnerAlign4Code = spinnerAlign4;
    this.spinnerSizeCode = spinnerSize;
    this.buttonBorderSpinnerCode = buttonBorderSpinner;
    this.buttonGrowingSpinnerCode = buttonGrowingSpinner;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
