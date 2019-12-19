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
      id: uuid(),
      name: 'open',
      completed: false
    },
    {
      id: uuid(),
      name: 'done',
      completed: true
    }
  ],
  selectedTodo: null
};

const todosReducer = createReducer(
  initialState,

  on(TodosActions.removeCompletedTodos, (state) => {
    return {
      ...state, // copy the state
      // no need to copy array (as filter returns a new array!)
      todos: state.todos.filter((t) => !t.completed)
    };
  }),
  on(TodosActions.setSelectedTodo, (state, {selectedTodo}) => {
    return {
      ...state,
      // apply selected todo
      selectedTodo
    };
  }),
  on(TodosActions.resetSelectedTodo, (state) => {
    return {
      ...state,
      selectedTodo: null
    };
  }),
  on(TodosActions.updateTodo, (state, {todo}) => {
    const newState = {
      ...state,
      // copy todos array
      todos: [...state.todos]
    };

    const idx = newState.todos.findIndex((t) => t.id === todo.id);
    if (idx > -1) {
      newState.todos[idx] = todo;
    } else {
      newState.todos.push(todo);
    }

    return newState;
  }),
  on(TodosActions.toggleTodo, (state, {todo}) => {
    const idx = state.todos.findIndex((t) => t.id === todo.id);
    if (idx > -1) {
      const newState = {
        ...state,
        // copy todos array
        todos: [
          ...state.todos
        ]
      };
      newState.todos[idx] = {
        ...todo, // copy the changed todo
        completed: !todo.completed // toggle completed state
      };
      return newState;
    }

    // todo with id was not found -> no changes
    return state;
  })
);

export function reducer(state: TodosState | undefined, action: Action) {
  return todosReducer(state, action);
}
