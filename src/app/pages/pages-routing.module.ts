import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProgessComponent} from "./progess/progess.component";
import {Grafica1Component} from "./grafica1/grafica1.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: PagesComponent,
    children: [
      {path: '', component: DashboardComponent},
      {path: 'progress', component: ProgessComponent},
      {path: 'grafica1', component: Grafica1Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
