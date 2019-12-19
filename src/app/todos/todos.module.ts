import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosContainerComponent} from './todos-container/todos-container.component';
import {TodosRoutingModule} from './todos-routing.module';


@NgModule({
  declarations: [
    TodosContainerComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule {
}
