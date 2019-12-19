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
  selectedTodo: null
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
      // copy todos
      todos: [...state.todos]
    };

    const idx = newState.todos.findIndex((t) => t.id === todo.id);
    if (idx > -1) {
      newState.todos[idx] = todo;
    } else {
      newState.todos.push(todo);
    }

    return newState;
  })
);

export function reducer(state: TodosState | undefined, action: Action) {
  return todosReducer(state, action);
}
