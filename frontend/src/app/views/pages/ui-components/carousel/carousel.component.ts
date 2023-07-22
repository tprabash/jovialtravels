import { Component, OnInit } from '@angular/core';

const slidesOnly = {
  htmlCode: 
`<ngb-carousel *ngIf="images" [showNavigationArrows]="false" [showNavigationIndicators]="false">
  <ng-template ngbSlide *ngFor="let image of images">
    <div class="picsum-img-wrapper">
      <img [src]="image" class="d-block w-100" alt="Random slide">
    </div>
  </ng-template>
</ngb-carousel>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images = ['assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg'];
}`
}

const widthControls = {
  htmlCode: 
`<ngb-carousel *ngIf="images" [showNavigationArrows]="true" [showNavigationIndicators]="false">
  <ng-template ngbSlide *ngFor="let image of images">
    <div class="picsum-img-wrapper">
      <img [src]="image" class="d-block w-100" alt="Random slide">
    </div>
  </ng-template>
</ngb-carousel>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images = ['assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg'];
}`
}

const widthIndicators = {
  htmlCode: 
`<ngb-carousel *ngIf="images" [showNavigationArrows]="true" [showNavigationIndicators]="true">
  <ng-template ngbSlide *ngFor="let image of images">
    <div class="picsum-img-wrapper">
      <img [src]="image" class="d-block w-100" alt="Random slide">
    </div>
  </ng-template>
</ngb-carousel>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images = ['assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg'];
}`
}

const widthCaptions = {
  htmlCode: 
`<ngb-carousel *ngIf="images" [showNavigationArrows]="true" [showNavigationIndicators]="true">
  <ng-template ngbSlide>
    <div class="picsum-img-wrapper">
      <img [src]="images[0]" class="d-block w-100" alt="Random first slide">
    </div>
    <div class="carousel-caption">
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </div>
  </ng-template>
  <ng-template ngbSlide>
    <div class="picsum-img-wrapper">
      <img [src]="images[1]" class="d-block w-100" alt="Random second slide">
    </div>
    <div class="carousel-caption">
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </ng-template>
  <ng-template ngbSlide>
    <div class="picsum-img-wrapper">
      <img [src]="images[2]" class="d-block w-100" alt="Random third slide">
    </div>
    <div class="carousel-caption">
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </div>
  </ng-template>
</ngb-carousel>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images = ['assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg'];
}`
}

const crossfadeCarousel = {
  htmlCode: 
`<ngb-carousel *ngIf="images" class="carousel-fade" [showNavigationArrows]="true" [showNavigationIndicators]="true">
  <ng-template ngbSlide *ngFor="let image of images">
    <div class="picsum-img-wrapper">
      <img [src]="image" class="d-block w-100" alt="Random slide">
    </div>
  </ng-template>
</ngb-carousel>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent {
  images = ['assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg'];
}`
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html'
})
export class CarouselComponent implements OnInit {

  images = ['assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg', 'assets/images/others/placeholder.jpg'];

  slidesOnlyCode: any;
  widthControlsCode: any;
  widthIndicatorsCode: any;
  widthCaptionsCode: any;
  crossfadeCarouselCode: any;

  constructor() { }

  ngOnInit(): void {
    this.slidesOnlyCode = slidesOnly;
    this.widthControlsCode = widthControls;
    this.widthIndicatorsCode = widthIndicators;
    this.widthCaptionsCode = widthCaptions;
    this.crossfadeCarouselCode = crossfadeCarousel;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
