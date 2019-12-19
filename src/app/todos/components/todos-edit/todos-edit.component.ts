import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../todos.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todos-edit',
  templateUrl: './todos-edit.component.html',
  styleUrls: ['./todos-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosEditComponent implements OnInit {

  @Input()
  todo: Todo;

  @Output()
  todoChanged = new EventEmitter<Todo>();

  todoFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.todoFormGroup = this.fb.group(this.todo);
  }

  updateText(): void {
    this.todoChanged.emit(this.getTodo());
  }

  /**
   * gets the current todo from the form.
   */
  private getTodo(): Todo {
    return this.todoFormGroup.value;
  }

}
