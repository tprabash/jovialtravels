import { Component, OnInit } from '@angular/core';

const defaultListGroup = {
  htmlCode: 
`<ul class="list-group">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html'
})
export class ListGroupComponent {}`
}

const listGroupActiveItem = {
  htmlCode: 
`<ul class="list-group">
  <li class="list-group-item active">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html'
})
export class ListGroupComponent {}`
}

const listGroupDisabledItem = {
  htmlCode: 
`<ul class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html'
})
export class ListGroupComponent {}`
}

const linkButtonListGroup = {
  htmlCode: 
`<div class="list-group">
  <a href="" (click)="false" class="list-group-item list-group-item-action active">
    Cras justo odio
  </a>
  <a href="" (click)="false" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
  <a href="" (click)="false" class="list-group-item list-group-item-action">Morbi leo risus</a>
  <a href="" (click)="false" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
  <a href="" (click)="false" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html'
})
export class ListGroupComponent {}`
}

const flushListGroup = {
  htmlCode: 
`<ul class="list-group list-group-flush">
  <li class="list-group-item">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ul>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html'
})
export class ListGroupComponent {}`
}

const withBadges = {
  htmlCode: 
`<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A second list item
    <span class="badge bg-primary rounded-pill">2</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    A third list item
    <span class="badge bg-primary rounded-pill">1</span>
  </li>
</ul>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html'
})
export class ListGroupComponent {}`
}

const checkboxesRadios = {
  htmlCode: 
`<div class="list-group">
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    First checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Second checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Third checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Fourth checkbox
  </label>
  <label class="list-group-item">
    <input class="form-check-input me-1" type="checkbox" value="">
    Fifth checkbox
  </label>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html'
})
export class ListGroupComponent {}`
}

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html'
})
export class ListGroupComponent implements OnInit {

  defaultListGroupCode: any;
  listGroupActiveItemCode: any;
  listGroupDisabledItemCode: any;
  linkButtonListGroupCode: any;
  flushListGroupCode: any;
  withBadgesCode: any;
  checkboxesRadiosCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultListGroupCode = defaultListGroup;
    this.listGroupActiveItemCode = listGroupActiveItem;
    this.listGroupDisabledItemCode = listGroupDisabledItem;
    this.linkButtonListGroupCode = linkButtonListGroup;
    this.flushListGroupCode = flushListGroup;
    this.withBadgesCode = withBadges;
    this.checkboxesRadiosCode = checkboxesRadios;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
