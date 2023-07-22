import { Component, OnInit } from '@angular/core';

const defaultButtons = {
  htmlCode: 
`<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

const buttonTags = {
  htmlCode: 
`<a class="btn btn-primary" href="" (click)="false" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

const outlineButtons = {
  htmlCode: 
`<button type="button" class="btn btn-outline-primary">Primary</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

const buttonSizes = {
  htmlCode: 
`<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-primary">Default button</button>
<button type="button" class="btn btn-primary btn-xs">Extra small</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

const blockButton = {
  htmlCode: 
`<div class="d-grid gap-2">
  <button type="button" class="btn btn-primary">Block level button</button>
  <button type="button" class="btn btn-secondary">Block level button</button>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

const activeStateButton = {
  htmlCode: 
`<a href="" (click)="false" class="btn btn-primary active" role="button" aria-pressed="true">Primary link</a>
<a href="" (click)="false" class="btn btn-secondary active" role="button" aria-pressed="true">Link</a>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

const disabledStateButton = {
  htmlCode: 
`<button type="button" class="btn btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary" disabled>Button</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

const disabledStateLinkButton = {
  htmlCode: 
`<a href="" (click)="false" class="btn btn-primary disabled" tabindex="-1" role="button" aria-disabled="true">Primary link</a>
<a href="" (click)="false" class="btn btn-secondary disabled" tabindex="-1" role="button" aria-disabled="true">Link</a>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

const iconButton = {
  htmlCode: 
`<button type="button" class="btn btn-primary btn-icon">
  <i class="feather icon-check-square"></i>
</button>
<button type="button" class="btn btn-danger btn-icon">
  <i class="feather icon-box"></i>
</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

const iconTextButton = {
  htmlCode: 
`<button type="button" class="btn btn-primary btn-icon-text">
  <i class="feather icon-check-square btn-icon-prepend"></i>
  Button with Icon
</button>
<button type="button" class="btn btn-primary btn-icon-text">
  Button with Icon
  <i class="feather icon-box btn-icon-append"></i>
</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

const socialIconButton = {
  htmlCode: 
`<button type="button" class="btn btn-icon btn-facebook">
  <i class="feather icon-facebook"></i>
</button>
<button type="button" class="btn btn-icon btn-instagram">
  <i class="feather icon-instagram"></i>
</button>
<button type="button" class="btn btn-icon btn-twitter">
  <i class="feather icon-twitter"></i>
</button>
<button type="button" class="btn btn-icon btn-youtube">
  <i class="feather icon-youtube"></i>
</button>
<button type="button" class="btn btn-icon btn-github">
  <i class="feather icon-github"></i>
</button>
<button type="button" class="btn btn-icon btn-linkedin">
  <i class="feather icon-linkedin"></i>
</button>
<button type="button" class="btn btn-icon btn-outline-twitter">
  <i class="feather icon-twitter"></i>
</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

const socialIconTextButton = {
  htmlCode: 
`<button type="button" class="btn btn-icon-text btn-facebook">
  <i class="feather icon-facebook btn-icon-prepend"></i>
  Facebook
</button>
<button type="button" class="btn btn-icon-text btn-instagram">
  <i class="feather icon-instagram btn-icon-prepend"></i>
  Instagram
</button>
<button type="button" class="btn btn-icon-text btn-twitter">
  <i class="feather icon-twitter btn-icon-prepend"></i>
  Twitter
</button>
<button type="button" class="btn btn-icon-text btn-youtube">
  <i class="feather icon-youtube btn-icon-prepend"></i>
  Youtube
</button>
<button type="button" class="btn btn-icon-text btn-github">
  <i class="feather icon-github btn-icon-prepend"></i>
  Github
</button>
<button type="button" class="btn btn-icon-text btn-linkedin">
  <i class="feather icon-linkedin btn-icon-prepend"></i>
  LinkedIn
</button>
<button type="button" class="btn btn-icon-text btn-outline-twitter">
  <i class="feather icon-twitter btn-icon-prepend"></i>
  Twitter
</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html'
})
export class ButtonsComponent {}`
}

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  preserveWhitespaces: true
})
export class ButtonsComponent implements OnInit {

  defaultButtonsCode: any;
  buttonTagsCode: any;
  outlineButtonsCode: any;
  buttonSizesCode: any;
  blockButtonCode: any;
  activeStateButtonCode: any;
  disabledStateButtonCode: any;
  disabledStateLinkButtonCode: any;
  iconButtonCode: any;
  iconTextButtonCode: any;
  socialIconButtonCode: any;
  socialIconTextButtonCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultButtonsCode = defaultButtons;
    this.buttonTagsCode = buttonTags;
    this.outlineButtonsCode = outlineButtons;
    this.buttonSizesCode = buttonSizes;
    this.blockButtonCode = blockButton;
    this.activeStateButtonCode = activeStateButton;
    this.disabledStateButtonCode = disabledStateButton;
    this.disabledStateLinkButtonCode = disabledStateLinkButton;
    this.iconButtonCode = iconButton;
    this.iconTextButtonCode = iconTextButton;
    this.socialIconButtonCode = socialIconButton;
    this.socialIconTextButtonCode = socialIconTextButton;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
