import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../todos.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {

  @Input()
  todos: Todo[];

  @Output()
  selectTodo = new EventEmitter<Todo>();

  @Output()
  toggleTodo = new EventEmitter<Todo>();

  constructor() {
  }

  ngOnInit() {
  }

}
