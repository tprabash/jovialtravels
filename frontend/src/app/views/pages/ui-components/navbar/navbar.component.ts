import { Component, OnInit } from '@angular/core';

const defaultNavbar = {
  htmlCode: 
`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" routerLink=".">Navbar</a>

  <!-- Toggle the value of the property when the toggler button is clicked. -->
  <button class="navbar-toggler" type="button" (click)="isBasicExampleMenuCollapsed = !isBasicExampleMenuCollapsed">
    &#9776;
  </button>

  <!-- Add the ngbCollapse directive to the element below. -->
  <div [ngbCollapse]="isBasicExampleMenuCollapsed" class="collapse navbar-collapse">
    <ul class="navbar-nav me-auto">
      <li class="nav-item active">
        <!-- Close the menu when a link is clicked. -->
        <a class="nav-link" routerLink="." (click)="isBasicExampleMenuCollapsed = true">Home <span class="visually-hidden">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="." (click)="isBasicExampleMenuCollapsed = true">Blog</a>
      </li>
      <li class="nav-item" ngbDropdown>
        <a class="nav-link" ngbDropdownToggle id="navbarDropdown1">
          Dropdown
        </a>
        <div ngbDropdownMenu aria-labelledby="navbarDropdown1">
          <a ngbDropdownItem routerLink="." (click)="isBasicExampleMenuCollapsed = true">Action</a>
          <a ngbDropdownItem routerLink="." (click)="isBasicExampleMenuCollapsed = true">Another action</a>
          <div class="dropdown-divider"></div>
          <a ngbDropdownItem routerLink="." (click)="isBasicExampleMenuCollapsed = true">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form class="d-flex my-2 my-lg-0">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  // Start with the menu collapsed so that it does not appear initially when the page loads on a small screen!
  public isBasicExampleMenuCollapsed = true;
}`
}

const navbarBrand = {
  htmlCode: 
`<!-- As a link -->
<nav class="navbar navbar-light bg-light mb-3">
  <a class="navbar-brand" routerLink=".">Navbar</a>
</nav>
<!-- As a heading -->
<nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Navbar</span>
</nav>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}`
}

const brandImage = {
  htmlCode: 
`<!-- Just an image -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" routerLink=".">
    <img src="assets/images/others/logo-placeholder.png" width="30" height="30" alt="">
  </a>
</nav>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}`
}

const brandImageText = {
  htmlCode: 
`<!-- Image and text -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" routerLink=".">
    <img src="assets/images/others/logo-placeholder.png" width="30" height="30" class="d-inline-block align-top" alt="">
    Logo
  </a>
</nav>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}`
}

const navbarForm = {
  htmlCode: 
`<nav class="navbar navbar-light bg-light">
  <form class="d-flex ms-auto">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}`
}

const navbarText = {
  htmlCode: 
`<nav class="navbar navbar-light bg-light">
  <span class="navbar-text">
    Navbar text with an inline element
  </span>
</nav>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}`
}

const navbarColor = {
  htmlCode: 
`<nav class="navbar navbar-dark bg-dark">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-light bg-danger">
  <!-- Navbar content -->
</nav>`
}

const navbarToggler = {
  htmlCode: 
`<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" routerLink=".">Navbar</a>

  <!-- Toggle the value of the property when the toggler button is clicked. -->
  <button class="navbar-toggler" type="button" (click)="isMenuCollapsed = !isMenuCollapsed">
    &#9776;
  </button>

  <!-- Add the ngbCollapse directive to the element below. -->
  <div [ngbCollapse]="isMenuCollapsed" class="collapse navbar-collapse">
    <ul class="navbar-nav me-auto">
      <li class="nav-item active">
        <!-- Close the menu when a link is clicked. -->
        <a class="nav-link active" routerLink="." (click)="isMenuCollapsed = true">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="." (click)="isMenuCollapsed = true">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="." (click)="isMenuCollapsed = true">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="." (click)="isMenuCollapsed = true">About</a>
      </li>
    </ul>
    <form class="d-flex my-2 my-lg-0">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  public isMenuCollapsed = true;
}`
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  // Start with the menu collapsed so that it does not appear initially when the page loads on a small screen!
  public isBasicExampleMenuCollapsed = true;
  public isNavbarDarkMenuCollapsed = true;
  public isNavbarPrimaryMenuCollapsed = true;
  public isNavbarDangerMenuCollapsed = true;
  public isMenuCollapsed = true;

  defaultNavbarCode: any;
  navbarBrandCode: any;
  brandImageCode: any;
  brandImageTextCode: any;
  navbarFormCode: any;
  navbarTextCode: any;
  navbarColorCode: any;
  navbarTogglerCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultNavbarCode = defaultNavbar;
    this.navbarBrandCode = navbarBrand;
    this.brandImageCode = brandImage;
    this.brandImageTextCode = brandImageText;
    this.navbarFormCode = navbarForm;
    this.navbarTextCode = navbarText;
    this.navbarColorCode = navbarColor;
    this.navbarTogglerCode = navbarToggler;
  }
  
  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
