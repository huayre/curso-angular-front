import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';

import {SidebarComponent} from "./sidebar/sidebar.component";
import {BreadcrumbsComponent} from "./breadcrumbs/breadcrumbs.component";
import {HeaderComponent} from "./header/header.component";


@NgModule({
  declarations: [
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,

  ],
  exports: [
    SidebarComponent,
    BreadcrumbsComponent,
    HeaderComponent
  ]
})
export class SharedModule {
}
