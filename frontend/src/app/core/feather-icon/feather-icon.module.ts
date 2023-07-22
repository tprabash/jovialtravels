import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherIconDirective } from './feather-icon.directive';

@NgModule({
  declarations: [FeatherIconDirective],
  imports: [
    CommonModule,
  ],
  exports: [FeatherIconDirective]
})
export class FeatherIconModule { }
