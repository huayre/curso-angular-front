import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {PagesRoutingModule} from './pages-routing.module';

import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "../components/components.module";

import {ProgessComponent} from "./progess/progess.component";
import {Grafica1Component} from "./grafica1/grafica1.component";
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import { AccountSetingComponent } from './account-seting/account-seting.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    ProgessComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent,
    AccountSetingComponent,
    PromisesComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    FormsModule,
    ComponentsModule
  ],
  exports: [
    ProgessComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent,
    AccountSetingComponent
  ]
})
export class PagesModule {
}
