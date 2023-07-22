import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.scss']
})
export class CodePreviewComponent implements OnInit {
	// Public properties
  @Input() codeContent: any;
  defaultNavActiveId = undefined;
  copy: string = 'copy';
  
  constructor() { }

  ngOnInit() {
    // console.log(this.codeContent);
  }

  copied(e: any) {
    if(e.isSuccess) {
      this.copy = 'copied';
      setTimeout(() => {
        this.copy = 'copy';
      }, 500);
    }
    
    
  }

}
