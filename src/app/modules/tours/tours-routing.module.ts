import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouterName} from "../../app-routing.module";
import {LayoutComponent} from "./components/layout/layout.component";

const routes: Routes = [
  {
    path: RouterName.MAIN,
    component: LayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToursRoutingModule {
}
