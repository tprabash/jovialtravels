import { Component, OnInit } from '@angular/core';

const defaultBreadcrumb = {
  htmlCode: 
`<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a routerLink=".">Home</a></li>
    <li class="breadcrumb-item"><a routerLink=".">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {}`
}

const lineSeperator = {
  htmlCode: 
`<nav aria-label="breadcrumb">
  <ol class="breadcrumb breadcrumb-line">
    <li class="breadcrumb-item"><a routerLink=".">Home</a></li>
    <li class="breadcrumb-item"><a routerLink=".">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {}`
}

const dotSeperator = {
  htmlCode: 
`<nav aria-label="breadcrumb">
  <ol class="breadcrumb breadcrumb-dot">
    <li class="breadcrumb-item"><a routerLink=".">Home</a></li>
    <li class="breadcrumb-item"><a routerLink=".">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent {}`
}

const changingSeperator = {
  scssCode: 
`$breadcrumb-divider: quote(">");`
}

const changingSeperatorSvg = {
  scssCode: 
`$breadcrumb-divider: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPjxwYXRoIGQ9Ik0yLjUgMEwxIDEuNSAzLjUgNCAxIDYuNSAyLjUgOGw0LTQtNC00eiIgZmlsbD0iY3VycmVudENvbG9yIi8+PC9zdmc+);`
}

const changingSeperatorNone = {
  scssCode: 
`$breadcrumb-divider: none;`
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})
export class BreadcrumbsComponent implements OnInit {

  defaultBreadcrumbCode: any;
  lineSeperatorCode: any;
  dotSeperatorCode: any;
  changingSeperatorCode: any;
  changingSeperatorSvgCode: any;
  changingSeperatorNoneCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultBreadcrumbCode = defaultBreadcrumb;
    this.lineSeperatorCode = lineSeperator;
    this.dotSeperatorCode = dotSeperator;
    this.changingSeperatorCode = changingSeperator;
    this.changingSeperatorSvgCode = changingSeperatorSvg;
    this.changingSeperatorNoneCode = changingSeperatorNone;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
