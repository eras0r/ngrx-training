import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Todo} from '../../todos.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-todos-edit',
  templateUrl: './todos-edit.component.html',
  styleUrls: ['./todos-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosEditComponent implements OnInit, OnChanges {

  @Input()
  todo: Todo;

  @Output()
  todoChanged = new EventEmitter<Todo>();

  @Output()
  onCancel = new EventEmitter<void>();

  todoForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.todo && changes.todo.currentValue) {
      this.initForm(changes.todo.currentValue);
    }
  }

  public saveTodo(): void {
    this.todoChanged.emit(this.getTodo());
  }

  public cancel() {
    this.onCancel.emit();
  }

  private initForm(todo: Todo): void {
    if (todo) {
      this.todoForm = this.fb.group(todo);
    }
  }

  /**
   * gets the current todo from the form.
   */
  private getTodo(): Todo {
    return this.todoForm.value;
  }

}
