import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Todo} from '../../todos.model';
import {TodosState} from '../../todos.reducer';
import {selectTodos} from '../../todos.selectors';

@Component({
  selector: 'app-todos-list-container',
  templateUrl: './todos-list-container.component.html',
  styleUrls: ['./todos-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListContainerComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(private store: Store<TodosState>) {
    this.todos$ = this.store.pipe(select(selectTodos));
  }

  ngOnInit() {
  }

}