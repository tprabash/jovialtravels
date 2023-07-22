import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsComponent } from './ui-components.component';
import { Routes, RouterModule } from '@angular/router';
import { CodePreviewModule } from '../../partials/code-preview/code-preview.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { FeatherIconModule } from '../../../core/feather-icon/feather-icon.module';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AccordionComponent } from './accordion/accordion.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BadgesComponent } from './badges/badges.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { CardsComponent } from './cards/cards.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CollapseComponent } from './collapse/collapse.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { MediaObjectComponent } from './media-object/media-object.component';
import { ModalComponent } from './modal/modal.component';
import { NavsComponent } from './navs/navs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoversComponent } from './popovers/popovers.component';
import { ProgressComponent } from './progress/progress.component';
import { ScrollbarComponent } from './scrollbar/scrollbar.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { RatingComponent } from './rating/rating.component';
import { TimepickerComponent } from './timepicker/timepicker.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

const routes: Routes = [
  {
    path: '',
    component: UiComponentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'accordion',
        pathMatch: 'full'
      },
      {
        path: 'accordion',
        component: AccordionComponent
      },
      {
        path: 'alerts',
        component: AlertsComponent
      },
      {
        path: 'badges',
        component: BadgesComponent
      },
      {
        path: 'breadcrumbs',
        component: BreadcrumbsComponent
      },
      {
        path: 'buttons',
        component: ButtonsComponent
      },
      {
        path: 'button-group',
        component: ButtonGroupComponent
      },
      {
        path: 'cards',
        component: CardsComponent
      },
      {
        path: 'carousel',
        component: CarouselComponent
      },
      {
        path: 'collapse',
        component: CollapseComponent
      },
      {
        path: 'datepicker',
        component: DatepickerComponent
      },
      {
        path: 'dropdowns',
        component: DropdownsComponent
      },
      {
        path: 'list-group',
        component: ListGroupComponent
      },
      {
        path: 'media-object',
        component: MediaObjectComponent
      },
      {
        path: 'modal',
        component: ModalComponent
      },
      {
        path: 'navs',
        component: NavsComponent
      },
      {
        path: 'navbar',
        component: NavbarComponent
      },      
      {
        path: 'pagination',
        component: PaginationComponent
      },
      {
        path: 'popovers',
        component: PopoversComponent
      },
      {
        path: 'progress',
        component: ProgressComponent
      },
      {
        path: 'rating',
        component: RatingComponent
      },
      {
        path: 'scrollbar',
        component: ScrollbarComponent
      },
      {
        path: 'spinners',
        component: SpinnersComponent
      },
      {
        path: 'timepicker',
        component: TimepickerComponent
      },
      {
        path: 'tooltips',
        component: TooltipsComponent
      },
      {
        path: 'typeahead',
        component: TypeaheadComponent
      }
    ]
  }
]

@NgModule({
  declarations: [UiComponentsComponent, AccordionComponent, AlertsComponent, BadgesComponent, BreadcrumbsComponent, ButtonsComponent, ButtonGroupComponent, CardsComponent, CarouselComponent, CollapseComponent, DropdownsComponent, ListGroupComponent, MediaObjectComponent, ModalComponent, NavsComponent, NavbarComponent, PaginationComponent, PopoversComponent, ProgressComponent, ScrollbarComponent, SpinnersComponent, TooltipsComponent, RatingComponent, TimepickerComponent, DatepickerComponent, TypeaheadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CodePreviewModule,
    NgbModule,
    PerfectScrollbarModule,
    FormsModule,
    FeatherIconModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class UiComponentsModule { }
