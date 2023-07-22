import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";

// Ng2-charts
import { NgChartsModule } from 'ng2-charts';

import { ChartsGraphsComponent } from './charts-graphs.component';
import { ApexchartsComponent } from './apexcharts/apexcharts.component';
import { ChartjsComponent } from './chartjs/chartjs.component';

const routes: Routes = [
  {
    path: '',
    component: ChartsGraphsComponent,
    children: [
      {
        path: '',
        redirectTo: 'apexcharts',
        pathMatch: 'full'
      },
      {
        path: 'apexcharts',
        component: ApexchartsComponent
      },
      {
        path: 'chartjs',
        component: ChartjsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [ ChartsGraphsComponent, ApexchartsComponent, ChartjsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule, // Ng-ApexCharts
    NgChartsModule, // Ng2-charts
  ]
})
export class ChartsGraphsModule { }
