import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {TodosState} from '../../todos.reducer';
import {selectSelectedTodo} from '../../todos.selectors';
import {Observable} from 'rxjs';
import {Todo} from '../../todos.model';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-todos-edit-container',
  templateUrl: './todos-edit-container.component.html',
  styleUrls: ['./todos-edit-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosEditContainerComponent implements OnInit {

  todo$: Observable<Todo>;

  constructor(private store: Store<TodosState>, private fb: FormBuilder) {
    this.todo$ = this.store.pipe(select(selectSelectedTodo));

  }

  ngOnInit() {
  }

}
