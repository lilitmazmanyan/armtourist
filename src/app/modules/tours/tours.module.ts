import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToursRoutingModule} from './tours-routing.module';
import {LayoutComponent} from './components/layout/layout.component';
import {CardComponent} from './components/card/card.component';

@NgModule({
  declarations: [
    LayoutComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ToursRoutingModule
  ]
})
export class ToursModule {
}
