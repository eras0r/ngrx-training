import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodosState} from '../../todos.reducer';
import {removeCompletedTodos} from '../../todos.actions';

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

}
