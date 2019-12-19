import {v4 as uuid} from 'uuid';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodosState} from '../../todos.reducer';
import {removeCompletedTodos, setSelectedTodo} from '../../todos.actions';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
  styleUrls: ['./todos-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosContainerComponent implements OnInit {

  constructor(private store: Store<TodosState>) {
  }

  ngOnInit() {
  }

  removeCompletedTodos(): void {
    this.store.dispatch(removeCompletedTodos());
  }

  createTodo(): void {
    const newTodo = {id: uuid(), name: '', completed: false};
    this.store.dispatch(setSelectedTodo({selectedTodo: newTodo}));
  }

}
