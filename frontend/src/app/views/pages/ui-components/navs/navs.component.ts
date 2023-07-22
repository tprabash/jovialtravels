import { Component, OnInit } from '@angular/core';

const defaultNav = {
  htmlCode: 
`<ul ngbNav #defaultNav="ngbNav" [(activeId)]="defaultNavActiveId" class="nav-tabs">
  <li [ngbNavItem]="1">
    <a ngbNavLink>One</a>
    <ng-template ngbNavContent>
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro
        keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat
        salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="2">
    <a ngbNavLink>Two</a>
    <ng-template ngbNavContent>
      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko
        farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts
        ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar
        helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson
        8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester
        stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="3">
    <a ngbNavLink>Three</a>
    <ng-template ngbNavContent>
      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.
        Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio.
        Duis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna,
        egestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec
        tristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget
        neque. Phasellus nec tortor vel tellus pulvinar feugiat.</p>
    </ng-template>
  </li>
</ul>

<div [ngbNavOutlet]="defaultNav" class="border border-top-0 p-3"></div>
<p class="mt-2">Active: {{ defaultNavActiveId }}</p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html'
})
export class NavsComponent {
  defaultNavActiveId = 1;
}`
}

const horizontalCenter = {
  htmlCode: 
`<ul ngbNav #horizontalCenterNav="ngbNav" class="nav-tabs justify-content-center">
  <li [ngbNavItem]="1">
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Home</h6>
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="2">
    <a ngbNavLink>Profile</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Profile</h6>
      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko
        farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts
        ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="3">
    <a ngbNavLink>Contact</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Contact</h6>
      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.
        Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio.
        Duis pharetra et nisl at faucibus.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="4">
    <a ngbNavLink class="disabled">Disabled</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Disabled content</h6>
      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam.</p>
    </ng-template>
  </li>
</ul>

<div [ngbNavOutlet]="horizontalCenterNav" class="border border-top-0 p-3"></div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html'
})
export class NavsComponent {}`
}

const horizontalEnd = {
  htmlCode: 
`<ul ngbNav #horizontalEndNav="ngbNav" class="nav-tabs justify-content-end">
  <li [ngbNavItem]="1">
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Home</h6>
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="2">
    <a ngbNavLink>Profile</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Profile</h6>
      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko
        farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts
        ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="3">
    <a ngbNavLink>Contact</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Contact</h6>
      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.
        Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio.
        Duis pharetra et nisl at faucibus.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="4">
    <a ngbNavLink class="disabled">Disabled</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Disabled content</h6>
      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam.</p>
    </ng-template>
  </li>
</ul>

<div [ngbNavOutlet]="horizontalEndNav" class="border border-top-0 p-3"></div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html'
})
export class NavsComponent {}`
}

const verticalNav = {
  htmlCode: 
`<div class="row">
  <div class="col-5 col-md-3 pe-0">
    <ul ngbNav #verticalNav="ngbNav" class="nav-tabs nav-tabs-vertical" orientation="vertical">
      <li [ngbNavItem]="1">
        <a ngbNavLink>Home</a>
        <ng-template ngbNavContent>
          <h6 class="mb-2">Home</h6>
          <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
            master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
        </ng-template>
      </li>
      <li [ngbNavItem]="2">
        <a ngbNavLink>Profile</a>
        <ng-template ngbNavContent>
          <h6 class="mb-2">Profile</h6>
          <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko
            farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts
            ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
        </ng-template>
      </li>
      <li [ngbNavItem]="3">
        <a ngbNavLink>Contact</a>
        <ng-template ngbNavContent>
          <h6 class="mb-2">Contact</h6>
          <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.
            Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio.
            Duis pharetra et nisl at faucibus.</p>
        </ng-template>
      </li>
      <li [ngbNavItem]="4">
        <a ngbNavLink class="disabled">Disabled</a>
        <ng-template ngbNavContent>
          <h6 class="mb-2">Disabled content</h6>
          <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam.</p>
        </ng-template>
      </li>
    </ul>
  </div>
  <div class="col-7 col-md-9 ps-0">
    <div [ngbNavOutlet]="verticalNav" class="tab-content-vertical border p-3"></div>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html'
})
export class NavsComponent {}`
}

const fillJustifyNav = {
  htmlCode: 
`<ul ngbNav #fillJustifyNav="ngbNav" class="nav-tabs nav-fill">
  <li [ngbNavItem]="1">
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Home</h6>
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="2">
    <a ngbNavLink>Profile</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Profile</h6>
      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko
        farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts
        ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="3">
    <a ngbNavLink>Contact</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Contact</h6>
      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.
        Donec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio.
        Duis pharetra et nisl at faucibus.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="4">
    <a ngbNavLink class="disabled">Disabled</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Disabled content</h6>
      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam.</p>
    </ng-template>
  </li>
</ul>

<div [ngbNavOutlet]="fillJustifyNav" class="border border-top-0 p-3"></div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html'
})
export class NavsComponent {}`
}

const navWidthDropdown = {
  htmlCode: 
`<ul ngbNav #navWithDropdown="ngbNav" class="nav-tabs">
  <li [ngbNavItem]="1">
    <a ngbNavLink>Home</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Home</h6>
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth
        master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
    </ng-template>
  </li>
  <li [ngbNavItem]="2">
    <a ngbNavLink>Profile</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Profile</h6>
      <p>Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko
        farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts
        ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
    </ng-template>
  </li>
  <li ngbDropdown ngbNavItem>
    <a href (click)="false" class="nav-link" ngbDropdownToggle>Dropdown</a>
    <div ngbDropdownMenu>
      <button ngbDropdownItem>Action</button>
      <button ngbDropdownItem>Another action</button>
      <button ngbDropdownItem>Something else here</button>
      <div class="dropdown-divider"></div>
      <button ngbDropdownItem>Separated link</button>
    </div>
  </li>
  <li [ngbNavItem]="4">
    <a ngbNavLink class="disabled">Disabled</a>
    <ng-template ngbNavContent>
      <h6 class="mb-2">Disabled content</h6>
      <p>Sed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam.</p>
    </ng-template>
  </li>
</ul>

<div [ngbNavOutlet]="navWithDropdown" class="border border-top-0 p-3"></div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html'
})
export class NavsComponent {}`
}

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html'
})
export class NavsComponent implements OnInit {

  defaultNavActiveId = 1;
  defaultNavCode: any;
  horizontalAlignmentCenterCode: any;
  horizontalCenterCode: any;
  horizontalEndCode: any;
  verticalNavCode: any;
  fillJustifyNavCode: any;
  navWidthDropdownCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultNavCode = defaultNav;
    this.horizontalCenterCode = horizontalCenter;
    this.horizontalEndCode = horizontalEnd;
    this.verticalNavCode = verticalNav;
    this.fillJustifyNavCode = fillJustifyNav;
    this.navWidthDropdownCode = navWidthDropdown;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
