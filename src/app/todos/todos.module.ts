import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosContainerComponent} from './todos-container/todos-container.component';
import {TodosRoutingModule} from './todos-routing.module';
import { TodosListContainerComponent } from './todos-list-container/todos-list-container.component';
import { TodosDetailContainerComponent } from './todos-detail-container/todos-detail-container.component';


@NgModule({
  declarations: [
    TodosContainerComponent,
    TodosListContainerComponent,
    TodosDetailContainerComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule {
}
