import { Component, OnInit } from '@angular/core';

const defaultPopover = {
  htmlCode: 
`<button type="button" class="btn btn-primary" popoverTitle="Popover title" ngbPopover="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html'
})
export class PopoversComponent {}`
}

const popoverDirecions = {
  htmlCode: 
`<button type="button" class="btn btn-primary mb-1 mb-md-0" placement="top" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on top
</button>
<button type="button" class="btn btn-primary mb-1 mb-md-0" placement="end" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on right
</button>
<button type="button" class="btn btn-primary" placement="bottom" ngbPopover="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on bottom
</button>
<button type="button" class="btn btn-primary" placement="start" ngbPopover="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Popover on left
</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html'
})
export class PopoversComponent {}`
}

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  preserveWhitespaces: true
})
export class PopoversComponent implements OnInit {

  defaultPopoverCode: any;
  popoverDirecionsCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultPopoverCode = defaultPopover;
    this.popoverDirecionsCode = popoverDirecions;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
