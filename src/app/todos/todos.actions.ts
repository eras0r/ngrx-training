import {createAction, props} from '@ngrx/store';
import {Todo} from './todos.model';

export const loadTodos = createAction(
  '[Todos] Load Todos'
);

export const removeCompletedTodos = createAction(
  '[Todos] Remove Completed Todos'
);

export const setSelectedTodo = createAction(
  '[Todos] Set Selected Todo',
  props<{ selectedTodo: Todo }>()
);
