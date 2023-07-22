import { Component, OnInit } from '@angular/core';

const defaultCard = {
  htmlCode: 
`<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="" (click)="false" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const contentBody = {
  htmlCode: 
`<div class="card">
  <div class="card-body">
    This is some text within a card body.
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const contentTitleText = {
  htmlCode: 
`<div class="card">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text mb-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="" (click)="false" class="card-link">Card link</a>
    <a href="" (click)="false" class="card-link">Another link</a>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const contentImage = {
  htmlCode: 
`<div class="card">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
<div class="card">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <img src="..." class="card-img-top" alt="...">
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const listGroup = {
  htmlCode: 
`<div class="card">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const listGroup2 = {
  htmlCode: 
`<div class="card">
  <div class="card-header">
    Featured
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const headerFooter = {
  htmlCode: 
`<div class="card">
  <div class="card-header">
    Card header
  </div>
  <div class="card-body">
    ...
  </div>
</div>

<div class="card">
  <div class="card-body">
    ...
  </div>
  <div class="card-footer">
    Card footer
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const cardSizing = {
  htmlCode: 
`<div class="row">
  <div class="col-12 col-md-4 col-xl-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text mb-3">With supporting text below as a natural lead-in to additional content.</p>
        <a href="" (click)="false" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-xl-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to content.</p>
        <a href="" (click)="false" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const cardNavigation = {
  htmlCode: 
`<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item"><a class="nav-link active" href="" (click)="false">Active</a></li>
      <li class="nav-item"><a class="nav-link" href="" (click)="false">Link</a></li>
      <li class="nav-item"><a class="nav-link disabled" href="" (click)="false" tabindex="-1" aria-disabled="true">Disabled</a></li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text mb-3">With supporting text below as a natural lead-in to additional content.</p>
    <a href="" (click)="false" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const imgOverlay = {
  htmlCode: 
`<div class="card text-white">
  <img src="..." class="card-img" alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const bgColor = {
  htmlCode: 
`<div class="card text-white bg-primary">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>

<div class="card text-white bg-secondary">
  ...
</div>
<div class="card text-white bg-success">
  ...
</div>
<div class="card text-white bg-danger">
  ...
</div>
<div class="card text-white bg-warning">
  ...
</div>
<div class="card text-white bg-info">
  ...
</div>
<div class="card text-white bg-light">
  ...
</div>
<div class="card text-white bg-dark">
  ...
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const cardGroup = {
  htmlCode: 
`<div class="card-group">
  <div class="card"> ... </div>
  <div class="card"> ... </div>
  <div class="card"> ... </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

const gridCards = {
  htmlCode: 
`<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="assets/images/others/placeholder.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="assets/images/others/placeholder.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="assets/images/others/placeholder.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="assets/images/others/placeholder.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {}`
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  defaultCardCode: any;
  contentBodyCode: any;
  contentTitleTextCode: any;
  contentImageCode: any;
  listGroupCode: any;
  listGroup2Code: any;
  headerFooterCode: any;
  cardSizingCode: any;
  cardNavigationCode: any;
  imgOverlayCode: any;
  bgColorCode: any;
  cardGroupCode: any;
  gridCardsCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultCardCode = defaultCard;
    this.contentBodyCode = contentBody;
    this.contentTitleTextCode = contentTitleText;
    this.contentImageCode = contentImage;
    this.listGroupCode = listGroup;
    this.listGroup2Code = listGroup2;
    this.headerFooterCode = headerFooter;
    this.cardSizingCode = cardSizing;
    this.cardNavigationCode = cardNavigation;
    this.imgOverlayCode = imgOverlay;
    this.bgColorCode = bgColor;
    this.cardGroupCode = cardGroup;
    this.gridCardsCode = gridCards;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
