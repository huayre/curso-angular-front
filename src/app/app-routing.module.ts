import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PagesRoutingModule} from "./pages/pages-routing.module";

import {NopagefoundComponent} from "./nopagefound/nopagefound.component";
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";


const routes: Routes = [
  // path 'dashboard',PagesRoutingModule
  // path 'login',AuthRoutingModule
  // path 'register',AuthRoutingModule
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
