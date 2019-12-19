import {createAction} from '@ngrx/store';

export const loadTodos = createAction(
  '[Todos] Load Todos'
);

export const removeCompletedTodos = createAction(
  '[Todos] Remove Completed Todos'
);
