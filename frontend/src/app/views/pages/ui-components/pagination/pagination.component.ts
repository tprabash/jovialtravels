import { Component, OnInit } from '@angular/core';

const defaultPagination = {
  htmlCode: 
`<p class="mb-2">Default pagination:</p>
<ngb-pagination [collectionSize]="70" [(page)]="currentPage" aria-label="Default pagination"></ngb-pagination>

<p class="mb-2">No direction links:</p>
<ngb-pagination [collectionSize]="70" [(page)]="currentPage" [directionLinks]="false"></ngb-pagination>

<p class="mb-2">With boundary links:</p>
<ngb-pagination [collectionSize]="70" [(page)]="currentPage" [boundaryLinks]="true"></ngb-pagination>

<hr>

<p>Current page: {{currentPage}}</p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`
}

const advancedPagination = {
  htmlCode: 
`<p class="mb-2">Restricted size, no rotation:</p>
<ngb-pagination [collectionSize]="120" [(page)]="currentPage" [maxSize]="5" [boundaryLinks]="true"></ngb-pagination>

<p class="mb-2">Restricted size with rotation:</p>
<ngb-pagination [collectionSize]="120" [(page)]="currentPage" [maxSize]="5" [rotate]="true" [boundaryLinks]="true"></ngb-pagination>

<p class="mb-2">Restricted size with rotation and no ellipses:</p>
<ngb-pagination [collectionSize]="120" [(page)]="currentPage" [maxSize]="5" [rotate]="true" [ellipses]="false" [boundaryLinks]="true"></ngb-pagination>

<hr>

<p>Current page: {{currentPage}}</p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`
}

const customLinksPagination = {
  htmlCode: 
`<ngb-pagination [collectionSize]="70" [(page)]="currentPage" aria-label="Custom pagination">
  <ng-template ngbPaginationPrevious>Prev</ng-template>
  <ng-template ngbPaginationNext>Next</ng-template>
  <ng-template ngbPaginationNumber let-p>{{ getPageSymbol(p) }}</ng-template>
</ngb-pagination>
<hr>

<p>Current page: {{currentPage}}</p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;

  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }
}`
}

const paginationSize = {
  htmlCode: 
`<ngb-pagination [collectionSize]="50" [(page)]="currentPage" size="lg"></ngb-pagination>
<ngb-pagination [collectionSize]="50" [(page)]="currentPage"></ngb-pagination>
<ngb-pagination [collectionSize]="50" [(page)]="currentPage" size="sm"></ngb-pagination>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`
}

const paginationAlignment = {
  htmlCode: 
`<ngb-pagination class="d-flex justify-content-start" [collectionSize]="70" [(page)]="currentPage"></ngb-pagination>
<ngb-pagination class="d-flex justify-content-center" [collectionSize]="70" [(page)]="currentPage"></ngb-pagination>
<ngb-pagination class="d-flex justify-content-end" [collectionSize]="70" [(page)]="currentPage"></ngb-pagination>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`
}

const paginationSeparated = {
  htmlCode: 
`<ngb-pagination class="pagination-separated" [collectionSize]="70" [(page)]="currentPage"></ngb-pagination>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`
}

const paginationRounded = {
  htmlCode: 
`<ngb-pagination class="pagination-rounded" [collectionSize]="70" [(page)]="currentPage"></ngb-pagination>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent {
  currentPage = 4;
}`
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html'
})
export class PaginationComponent implements OnInit {

  defaultPaginationCurrentPage = 1;
  advancedPaginationCurrentPage = 2;
  customLinksPaginationCurrentPage = 3;
  paginationSizeCurrentPage = 4;
  paginationAlignmentCurrentPage = 2;
  paginationSeparatedCurrentPage = 3;
  paginationRoundedCurrentPage = 4;

  defaultPaginationCode: any;
  advancedPaginationCode: any;
  customLinksPaginationCode: any;
  paginationSizeCode: any;
  paginationAlignmentCode: any;
  paginationSeparatedCode: any;
  paginationRoundedCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultPaginationCode = defaultPagination;
    this.advancedPaginationCode = advancedPagination;
    this.customLinksPaginationCode = customLinksPagination;
    this.paginationSizeCode = paginationSize;
    this.paginationAlignmentCode = paginationAlignment;
    this.paginationSeparatedCode = paginationSeparated;
    this.paginationRoundedCode = paginationRounded;
  }

  // Custom links pagination
  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
