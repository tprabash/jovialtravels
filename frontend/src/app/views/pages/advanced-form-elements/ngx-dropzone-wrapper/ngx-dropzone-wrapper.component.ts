import { Component, OnInit, ViewChild } from '@angular/core';

import { DropzoneDirective, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-ngx-dropzone-wrapper',
  templateUrl: './ngx-dropzone-wrapper.component.html',
  styleUrls: ['./ngx-dropzone-wrapper.component.scss']
})
export class NgxDropzoneWrapperComponent implements OnInit {

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  @ViewChild(DropzoneDirective, { static: false }) directiveRef?: DropzoneDirective;

  constructor() { }

  ngOnInit(): void {
  }

  onUploadError(event: any): void {
    console.log('onUploadError:', event);
  }

  onUploadSuccess(event: any): void {
    console.log('onUploadSuccess:', event);
  }

  resetDropzoneUploads(): void {
    if (this.directiveRef) {
      this.directiveRef.reset();
    }
  }

}
