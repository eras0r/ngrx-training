import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosContainerComponent} from './containers/todos-container/todos-container.component';
import {TodosRoutingModule} from './todos-routing.module';
import {TodosListContainerComponent} from './containers/todos-list-container/todos-list-container.component';
import {TodosDetailContainerComponent} from './containers/todos-detail-container/todos-detail-container.component';
import {EffectsModule} from '@ngrx/effects';
import {TodosEffects} from './todos.effects';
import {StoreModule} from '@ngrx/store';
import * as todosReducer from './todos.reducer';


@NgModule({
  declarations: [
    TodosContainerComponent,
    TodosListContainerComponent,
    TodosDetailContainerComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    StoreModule.forFeature(todosReducer.todosFeatureKey, todosReducer.reducer),
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosModule {
}
