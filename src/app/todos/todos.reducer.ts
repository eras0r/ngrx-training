import {v4 as uuid} from 'uuid';
import {Action, createReducer, on} from '@ngrx/store';
import * as TodosActions from './todos.actions';
import {Todo} from './todos.model';

export const todosFeatureKey = 'todos';

export interface TodosState {
  todos: Todo [];
  selectedTodo: Todo;
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
  ],
  selectedTodo: {id: uuid(), name: '', completed: false}
};

const todosReducer = createReducer(
  initialState,

  on(TodosActions.loadTodos, state => state),
  on(TodosActions.removeCompletedTodos, (state) => {
    return {
      ...state, // copy the state
      // no need to copy array (as filter returns a new array!)
      todos: state.todos.filter((t) => !t.completed)
    };
  }),
  on(TodosActions.setSelectedTodo, (state, {selectedTodo}) => {
    return {
      ...state, // copy the state
      // apply selected todo
      selectedTodo
    };
  })
);

export function reducer(state: TodosState | undefined, action: Action) {
  return todosReducer(state, action);
}
