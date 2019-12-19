import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosListComponent} from './todos-list.component';
import {Component, Input} from '@angular/core';
import {Todo} from '../../todos.model';

@Component({
  selector: 'app-todos-list-entry',
  template: ''
})
export class TodosListEntryStubComponent {
  @Input() todo: Todo;
}

describe('TodosListComponent', () => {
  let component: TodosListComponent;
  let fixture: ComponentFixture<TodosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodosListComponent,
        TodosListEntryStubComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
