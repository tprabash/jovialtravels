import { Component, OnInit } from '@angular/core';

const defaultTooltips = {
  htmlCode: 
`<button type="button" class="btn btn-primary" placement="top" ngbTooltip="Tooltip on top">
  Tooltip on top
</button>
<button type="button" class="btn btn-primary" placement="end" ngbTooltip="Tooltip on right">
  Tooltip on right
</button>
<button type="button" class="btn btn-primary" placement="bottom" ngbTooltip="Tooltip on bottom">
  Tooltip on bottom
</button>
<button type="button" class="btn btn-primary" placement="start" ngbTooltip="Tooltip on left">
  Tooltip on left
</button>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html'
})
export class TooltipsComponent {}`
}

@Component({
  selector: 'app-tooltips',
  templateUrl: './tooltips.component.html',
  preserveWhitespaces: true
})
export class TooltipsComponent implements OnInit {

  defaultTooltipsCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultTooltipsCode = defaultTooltips;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
