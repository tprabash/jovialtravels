import { Component, OnInit } from '@angular/core';

const rootModule = {
  moduleCode: 
`import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  ...
  imports: [
    ...
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})`
}

const component = {
  htmlCode: 
`<div class="perfect-scrollbar-example p-4 border" [perfectScrollbar]>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quam vitae? Saepe, quidem at in non quibusdam sint ipsa suscipit inventore. Dolore quae, quas obcaecati officia autem itaque numquam magni?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores vel ipsa fugiat maiores culpa accusamus, quisquam veniam quo deleniti velit facere aliquid, ut quis quibusdam reprehenderit quod aliquam perspiciatis?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat cumque ea, temporibus, ipsam officia nesciunt rem quas quibusdam necessitatibus ad. Quos, nihil consequatur doloribus dicta dolore ab quibusdam assumenda!</p>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, consectetur suscipit sed, soluta aperiam vitae unde voluptatibus deserunt, ipsum voluptatem iure. Enim quibusdam dolorum facilis non tempore labore, doloremque sint.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni placeat distinctio delectus fugiat nobis quia expedita architecto vero quidem id ullam, itaque tempore. Qui, a doloremque. Molestias vel labore cumque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime qui tempora mollitia eaque doloremque architecto, odit, pariatur rem harum vitae quod. Illo sed odit laboriosam voluptatem officiis magnam sequi maiores!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat porro dolore libero aspernatur tenetur qui ratione deleniti commodi modi accusamus maiores iure ipsa, tempore necessitatibus rerum eligendi quidem voluptates!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quam vitae? Saepe, quidem at in non quibusdam sint ipsa suscipit inventore. Dolore quae, quas obcaecati officia autem itaque numquam magni?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolores vel ipsa fugiat maiores culpa accusamus, quisquam veniam quo deleniti velit facere aliquid, ut quis quibusdam reprehenderit quod aliquam perspiciatis?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae placeat cumque ea, temporibus, ipsam officia nesciunt rem quas quibusdam necessitatibus ad. Quos, nihil consequatur doloribus dicta dolore ab quibusdam assumenda!</p>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, consectetur suscipit sed, soluta aperiam vitae unde voluptatibus deserunt, ipsum voluptatem iure. Enim quibusdam dolorum facilis non tempore labore, doloremque sint.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni placeat distinctio delectus fugiat nobis quia expedita architecto vero quidem id ullam, itaque tempore. Qui, a doloremque. Molestias vel labore cumque.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime qui tempora mollitia eaque doloremque architecto, odit, pariatur rem harum vitae quod. Illo sed odit laboriosam voluptatem officiis magnam sequi maiores!</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat porro dolore libero aspernatur tenetur qui ratione deleniti commodi modi accusamus maiores iure ipsa, tempore necessitatibus rerum eligendi quidem voluptates!</p>
</div>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html'
})
export class ScrollbarComponent {}`,
  scssCode: 
`.perfect-scrollbar-example {
  position: relative;
  max-height: 250px;
}`
}

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit {

  moduleCode: any;
  componentCode: any;

  constructor() { }

  ngOnInit(): void {
    this.moduleCode = rootModule;
    this.componentCode = component;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
