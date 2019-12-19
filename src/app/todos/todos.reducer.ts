import {Action, createReducer, on} from '@ngrx/store';
import * as TodosActions from './todos.actions';
import {Todo} from './todos.model';

export const todosFeatureKey = 'todos';

export interface TodosState {
  todos: Todo [];
}

export const initialState: TodosState = {
  todos: [
    {
      id: '1',
      name: 'open',
      completed: false
    },
    {
      id: '2',
      name: 'done',
      completed: true
    }
  ]
};

const todosReducer = createReducer(
  initialState,

  on(TodosActions.loadTodos, state => state),
  on(TodosActions.removeCompletedTodos, (state) => {
    return {
      ...state,
      todos: [
        ...state.todos // copy todos array
          .filter((t) => !t.completed)
      ]
    };
  })
);

export function reducer(state: TodosState | undefined, action: Action) {
  return todosReducer(state, action);
}
