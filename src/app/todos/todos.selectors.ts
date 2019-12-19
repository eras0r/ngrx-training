import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromTodos from './todos.reducer';
import {TodosState} from './todos.reducer';

export const selectTodosState = createFeatureSelector<fromTodos.TodosState>(
  fromTodos.todosFeatureKey
);

export const selectTodos = createSelector(
  selectTodosState,
  (state: TodosState) => state.todos
);
