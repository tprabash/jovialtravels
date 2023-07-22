import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Ngx-custom-validators
import { CustomFormsModule } from 'ngx-custom-validators';

// Ngx-mask
import { NgxMaskModule, IConfig } from 'ngx-mask';

// Ng-select
import { NgSelectModule } from '@ng-select/ng-select';

// Ngx-chips
import { TagInputModule } from 'ngx-chips';

// Ngx-color-picker
import { ColorPickerModule } from 'ngx-color-picker';

// Ngx-dropzone-wrapper
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  maxFilesize: 50,
  acceptedFiles: 'image/*'
};

import { AdvancedFormElementsComponent } from './advanced-form-elements.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { NgSelectComponent } from './ng-select/ng-select.component';
import { NgxChipsComponent } from './ngx-chips/ngx-chips.component';
import { NgxColorPickerComponent } from './ngx-color-picker/ngx-color-picker.component';
import { NgxDropzoneWrapperComponent } from './ngx-dropzone-wrapper/ngx-dropzone-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: AdvancedFormElementsComponent,
    children: [
      {
        path: '',
        redirectTo: 'form-validation',
        pathMatch: 'full'
      },
      {
        path: 'form-validation',
        component: FormValidationComponent
      },
      {
        path: 'input-mask',
        component: InputMaskComponent
      },
      {
        path: 'ng-select',
        component: NgSelectComponent
      },
      {
        path: 'ngx-chips',
        component: NgxChipsComponent
      },
      {
        path: 'ngx-color-picker',
        component: NgxColorPickerComponent
      },
      {
        path: 'ngx-dropzone-wrapper',
        component: NgxDropzoneWrapperComponent
      },
    ]
  }
]

@NgModule({
  declarations: [AdvancedFormElementsComponent, FormValidationComponent, InputMaskComponent, NgSelectComponent, NgxChipsComponent, NgxColorPickerComponent, NgxDropzoneWrapperComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule, // Ngx-custom-validators
    NgxMaskModule.forRoot({ validation: true}), // Ngx-mask
    NgSelectModule, // Ng-select
    TagInputModule, // Ngx-chips
    ColorPickerModule, // Ngx-color-picker
    DropzoneModule, // Ngx-dropzone-wrapper
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }, // Ngx-dropzone-wrapper
  ]
})
export class AdvancedFormElementsModule { }
