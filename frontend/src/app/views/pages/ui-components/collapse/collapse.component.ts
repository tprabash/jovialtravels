import { Component, OnInit } from '@angular/core';

const defaultCollapse = {
  htmlCode: 
`<p class="mb-2">
  <button type="button" class="btn btn-outline-primary" (click)="isCollapsed = !isCollapsed"
          [attr.aria-expanded]="!isCollapsed" aria-controls="collapseExample">
    Toggle
  </button>
</p>
<div id="collapseExample" [ngbCollapse]="isCollapsed">
  <div class="card">
    <div class="card-body">
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
    </div>
  </div>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent {}`
}

const responsiveNavbar = {
  htmlCode: 
`<nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
  <a class="navbar-brand" routerLink=".">Responsive navbar</a>
  
  <!-- Toggle the value of the property when the toggler button is clicked. -->
  <button class="navbar-toggler" type="button" (click)="isMenuCollapsed = !isMenuCollapsed">
    &#9776;
  </button>

  <!-- Add the ngbCollapse directive to the element below. -->
  <div [ngbCollapse]="isMenuCollapsed" class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <!-- Close the menu when a link is clicked. -->
        <a class="nav-link" routerLink="." (click)="isMenuCollapsed = true">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="." (click)="isMenuCollapsed = true">Examples</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="." (click)="isMenuCollapsed = true">About</a>
      </li>
    </ul>
  </div>
</nav>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent {
  // Create a property to track whether the menu is open.
  // Start with the menu collapsed so that it does not
  // appear initially when the page loads on a small screen!
  public isMenuCollapsed = true;
}`
}

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html'
})
export class CollapseComponent implements OnInit {

  public isCollapsed = false;
  public isMenuCollapsed = true;

  defaultCollapseCode: any;
  responsiveNavbarCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultCollapseCode = defaultCollapse;
    this.responsiveNavbarCode = responsiveNavbar;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
