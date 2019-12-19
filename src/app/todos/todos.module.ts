import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodosContainerComponent} from './containers/todos-container/todos-container.component';
import {TodosRoutingModule} from './todos-routing.module';
import {TodosListContainerComponent} from './containers/todos-list-container/todos-list-container.component';
import {TodosEditContainerComponent} from './containers/todos-edit-container/todos-edit-container.component';
import {EffectsModule} from '@ngrx/effects';
import {TodosEffects} from './todos.effects';
import {StoreModule} from '@ngrx/store';
import * as todosReducer from './todos.reducer';
import {TodosListComponent} from './components/todos-list/todos-list.component';
import {TodosListEntryComponent} from './components/todos-list-entry/todos-list-entry.component';
import {TodosEditComponent} from './components/todos-edit/todos-edit.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    TodosContainerComponent,
    TodosListContainerComponent,
    TodosEditContainerComponent,
    TodosListComponent,
    TodosListEntryComponent,
    TodosEditComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule,
    StoreModule.forFeature(todosReducer.todosFeatureKey, todosReducer.reducer),
    EffectsModule.forFeature([TodosEffects])
  ]
})
export class TodosModule {
}
