import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgessComponent} from "./progess/progess.component";
import {Grafica1Component} from "./grafica1/grafica1.component";
import {AccountSetingComponent} from "./account-seting/account-seting.component";
import {PromisesComponent} from "./promises/promises.component";
import {RxjsComponent} from "./rxjs/rxjs.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {path: '', component: DashboardComponent, data: {titulo: 'dashboard'}},
      {path: 'progress', component: ProgessComponent, data: {titulo: 'progress'}},
      {path: 'grafica1', component: Grafica1Component, data: {titulo: 'grafica1'}},
      {path: 'account-settings', component: AccountSetingComponent, data: {titulo: 'account-settings'}},
      {path: 'promesas', component: PromisesComponent, data: {titulo: 'dashboard'}},
      {path: 'rxjs', component: RxjsComponent, data: {titulo: 'rxjs'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
