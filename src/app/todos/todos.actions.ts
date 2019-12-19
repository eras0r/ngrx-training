import {createAction, props} from '@ngrx/store';
import {Todo} from './todos.model';

export const removeCompletedTodos = createAction(
  '[Todos] Remove Completed Todos'
);

export const setSelectedTodo = createAction(
  '[Todos] Set Selected Todo',
  props<{ selectedTodo: Todo }>()
);

export const resetSelectedTodo = createAction(
  '[Todos] Reset Selected Todo'
);

export const updateTodo = createAction(
  '[Todos] Update Todo',
  props<{ todo: Todo }>()
);

export const toggleTodo = createAction(
  '[Todos] Toggle Todo',
  props<{ todo: Todo }>()
);
