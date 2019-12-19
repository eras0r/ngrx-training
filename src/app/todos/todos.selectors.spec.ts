import * as fromTodos from './todos.reducer';
import {selectSelectedTodo, selectTodos, selectTodosState} from './todos.selectors';

describe('Todos Selectors', () => {

  const todoState = {
    todos: [],
    selectedTodo: null
  };

  it('should select the feature state', () => {
    const result = selectTodosState({
      [fromTodos.todosFeatureKey]: todoState
    });

    expect(result).toBe(todoState);
  });

  it('should select the todos', () => {
    const result = selectTodos.projector(todoState);
    expect(result).toBe(todoState.todos);
  });

  it('should select the selectedTodo', () => {
    const result = selectSelectedTodo.projector(todoState);
    expect(result).toBe(todoState.selectedTodo);
  });

});
