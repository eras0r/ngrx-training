import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardContainerComponent} from './containers/dashboard-container/dashboard-container.component';
import {DashboardRoutingModule} from './dashboard-routing.module';


@NgModule({
  declarations: [DashboardContainerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
