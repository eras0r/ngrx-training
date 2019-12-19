import * as fromTodos from './todos.reducer';
import {selectTodosState} from './todos.selectors';

describe('Todos Selectors', () => {
  it('should select the feature state', () => {
    const todoState = {
      todos: [],
      selectedTodo: null
    };

    const result = selectTodosState({
      [fromTodos.todosFeatureKey]: todoState
    });

    expect(result).toEqual(todoState);
  });
});
