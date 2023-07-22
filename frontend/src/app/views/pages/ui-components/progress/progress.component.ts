import { Component, OnInit } from '@angular/core';

const defaultProgress = {
  htmlCode: 
`<ngb-progressbar type="primary" [value]="25"></ngb-progressbar>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent {}`
}

const progressLabel = {
  htmlCode: 
`<p class="mb-3"><ngb-progressbar type="primary" [value]="25" [showValue]="true"></ngb-progressbar></p>
<p><ngb-progressbar type="success" [value]="100">Completed</ngb-progressbar></p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent {}`
}

const progressHeight = {
  htmlCode: 
`<p class="mb-3"><ngb-progressbar type="primary" [value]="25" height="5px"></ngb-progressbar></p>
<p class="mb-3"><ngb-progressbar type="primary" [value]="25" height="10px"></ngb-progressbar></p>
<p><ngb-progressbar type="primary" [value]="25" height="15px"></ngb-progressbar></p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent {}`
}

const progressBackground = {
  htmlCode: 
`<p class="mb-3"><ngb-progressbar type="primary" [value]="25" [showValue]="true"></ngb-progressbar></p>
<p class="mb-3"><ngb-progressbar type="success" [value]="40" [showValue]="true"></ngb-progressbar></p>
<p class="mb-3"><ngb-progressbar type="info" [value]="55" [showValue]="true"></ngb-progressbar></p>
<p class="mb-3"><ngb-progressbar type="warning" [value]="75" [showValue]="true"></ngb-progressbar></p>
<p><ngb-progressbar type="danger" [value]="95" [showValue]="true"></ngb-progressbar></p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent {}`
}

const progressStriped = {
  htmlCode: 
`<p class="mb-3"><ngb-progressbar type="primary" [value]="25" [striped]="true"></ngb-progressbar></p>
<p class="mb-3"><ngb-progressbar type="success" [value]="40" [striped]="true"></ngb-progressbar></p>
<p class="mb-3"><ngb-progressbar type="info" [value]="55" [striped]="true"></ngb-progressbar></p>
<p class="mb-3"><ngb-progressbar type="warning" [value]="75" [striped]="true"></ngb-progressbar></p>
<p><ngb-progressbar type="danger" [value]="95" [striped]="true"></ngb-progressbar></p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent {}`
}

const progressStripedAnimated = {
  htmlCode: 
`<p class="mb-3"><ngb-progressbar type="primary" [value]="25" [striped]="true" [animated]="true"></ngb-progressbar></p>
<p class="mb-3"><ngb-progressbar type="success" [value]="40" [striped]="true" [animated]="true"></ngb-progressbar></p>
<p class="mb-3"><ngb-progressbar type="info" [value]="55" [striped]="true" [animated]="true"></ngb-progressbar></p>
<p class="mb-3"><ngb-progressbar type="warning" [value]="75" [striped]="true" [animated]="true"></ngb-progressbar></p>
<p><ngb-progressbar type="danger" [value]="95" [striped]="true" [animated]="true"></ngb-progressbar></p>`,
  tsCode: 
`import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent {}`
}

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html'
})
export class ProgressComponent implements OnInit {

  defaultProgressCode: any;
  progressLabelCode: any;
  progressHeightCode: any;
  progressBackgroundCode: any;
  progressStripedCode: any;
  progressStripedAnimatedCode: any;

  constructor() { }

  ngOnInit(): void {
    this.defaultProgressCode = defaultProgress;
    this.progressLabelCode = progressLabel;
    this.progressHeightCode = progressHeight;
    this.progressBackgroundCode = progressBackground;
    this.progressStripedCode = progressStriped;
    this.progressStripedAnimatedCode = progressStripedAnimated;
  }

  scrollTo(element: any) {
    element.scrollIntoView({behavior: 'smooth'});
  }

}
