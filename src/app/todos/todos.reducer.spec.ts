import {reducer, TodosState} from './todos.reducer';
import * as TodosActions from './todos.actions';
import {Action} from '@ngrx/store';

describe('Todos Reducer', () => {

  let previousState: TodosState;
  let newState: TodosState;
  let action: Action;

  beforeEach(() => {
    previousState = {
      todos: [
        {id: '1', name: 'some task', completed: false},
        {id: '2', name: 'some completed task', completed: true},
        {id: '3', name: 'just finish it', completed: false},
        {id: '4', name: 'I am done', completed: true}
      ],
      selectedTodo: null
    };
  });

  describe('an unknown action', () => {
    it('should return the previous state', () => {
      action = {} as any;

      newState = reducer(previousState, action);

      expect(newState).toBe(previousState);
    });
  });

  describe(TodosActions.removeCompletedTodos.type, () => {

    describe('with completed todos', () => {

      beforeEach(() => {
        action = TodosActions.removeCompletedTodos();
        newState = reducer(previousState, action);
      });

      it('should copy the state', () => {
        expect(newState).not.toBe(previousState);
      });

      it('should copy the todos', () => {
        expect(newState.todos).not.toBe(previousState.todos);
      });

      it('should contain the proper number of todos', () => {
        expect(newState.todos.length).toBe(2);
      });

      it('should not contain any completed todos', () => {
        const todos = newState.todos.filter((t) => t.completed);
        expect(todos.length).toBe(0);
      });

      it('should still contain the not completed todos', () => {
        previousState.todos.filter((t) => !t.completed)
          .forEach((t) => expect(newState.todos).toContain(t));
      });

    });

    describe('without completed todos', () => {

      beforeEach(() => {
        // mark all todos in previous state as not completed
        previousState.todos.forEach((t) => t.completed = false);
        action = TodosActions.removeCompletedTodos();
        newState = reducer(previousState, action);
      });

      it('should copy the state', () => {
        expect(newState).not.toBe(previousState);
      });

      it('should copy the todos', () => {
        expect(newState.todos).not.toBe(previousState.todos);
      });

      it('should contain the proper number of todos', () => {
        expect(newState.todos.length).toBe(previousState.todos.length);
      });

      it('should still contain the todos from previous state', () => {
        previousState.todos.forEach((t) => expect(newState.todos).toContain(t));
      });

    });

  });

  describe(TodosActions.setSelectedTodo.type, () => {

    let selectedTodo;

    beforeEach(() => {
      selectedTodo = previousState.todos[0];
      action = TodosActions.setSelectedTodo({selectedTodo});
      newState = reducer(previousState, action);
    });

    it('should copy the state', () => {
      expect(newState).not.toBe(previousState);
    });

    it('should not change the todos', () => {
      expect(newState.todos).toBe(previousState.todos);
    });

    it('should change the selected todo', () => {
      expect(newState.selectedTodo).toEqual(selectedTodo);
    });

  });

  describe(TodosActions.setSelectedTodo.type, () => {

    beforeEach(() => {
      previousState.selectedTodo = previousState.todos[0];
      action = TodosActions.resetSelectedTodo();
      newState = reducer(previousState, action);
    });

    it('should copy the state', () => {
      expect(newState).not.toBe(previousState);
    });

    it('should not change the todos', () => {
      expect(newState.todos).toBe(previousState.todos);
    });

    it('should reset selected todo to null', () => {
      expect(newState.selectedTodo).toEqual(null);
    });

  });

});
