import { Component, OnInit } from '@angular/core';

const defaultBadge = {
  htmlCode: 
`<h1>Example heading <span class="badge bg-primary">New</span></h1>
<h2>Example heading <span class="badge bg-primary">New</span></h2>
<h3>Example heading <span class="badge bg-primary">New</span></h3>
<h4>Example heading <span class="badge bg-primary">New</span></h4>
<h5>Example heading <span class="badge bg-primary">New</span></h5>
<h6>Example heading <span class="badge bg-primary">New</span></h6>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html'
})
export class BadgesComponent {}`
}

const buttonBadge = {
  htmlCode: 
`<button type="button" class="btn btn-primary">
  Notifications <span class="badge bg-light text-dark">4</span>
</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html'
})
export class BadgesComponent {}`
}

const positionedBadge = {
  htmlCode: 
`<button type="button" class="btn btn-primary position-relative">
  Inbox
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html'
})
export class BadgesComponent {}`
}

const positionedIndicatorBadge = {
  htmlCode: 
`<button type="button" class="btn btn-primary position-relative">
  Profile
  <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span class="visually-hidden">New alerts</span>
  </span>
</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html'
})
export class BadgesComponent {}`
}

const contextualVariations = {
  htmlCode: 
`<span class="badge bg-primary">Primary</span>
<span class="badge bg-secondary">Secondary</span>
<span class="badge bg-success">Success</span>
<span class="badge bg-danger">Danger</span>
<span class="badge bg-warning">Warning</span>
<span class="badge bg-info">Info</span>
<span class="badge bg-light text-dark">Light</span>
<span class="badge bg-dark">Dark</span>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html'
})
export class BadgesComponent {}`
}

const pillBadge = {
  htmlCode: 
`<span class="badge rounded-pill bg-primary">Primary</span>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html'
})
export class BadgesComponent {}`
}

const linkBadge = {
  htmlCode: 
`<a href="" (click)="false" class="badge bg-primary">Primary</a>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html'
})
export class BadgesComponent {}`
}

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  preserveWhitespaces: true
})
export class BadgesComponent implements OnInit {

  defaultBadgeCode: any;
  buttonBadgeCode: any;
  positionedBadgeCode: any;
  positionedIndicatorBadgeCode: any;
  contextualVariationsCode: any;
  pillBadgeCode: any;
  linkBadgeCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultBadgeCode = defaultBadge;
    this.buttonBadgeCode = buttonBadge;
    this.positionedBadgeCode = positionedBadge;
    this.positionedIndicatorBadgeCode = positionedIndicatorBadge;
    this.contextualVariationsCode = contextualVariations;
    this.pillBadgeCode = pillBadge;
    this.linkBadgeCode = linkBadge;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
