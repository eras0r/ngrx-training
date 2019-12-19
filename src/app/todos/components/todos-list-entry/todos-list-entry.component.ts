import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../todos.model';

@Component({
  selector: 'app-todos-list-entry',
  templateUrl: './todos-list-entry.component.html',
  styleUrls: ['./todos-list-entry.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListEntryComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  selectTodo = new EventEmitter<Todo>();

  constructor() {
  }

  ngOnInit() {
  }

}
