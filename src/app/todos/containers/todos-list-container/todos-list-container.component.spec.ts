import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosListContainerComponent} from './todos-list-container.component';
import {MemoizedSelector, Store} from '@ngrx/store';
import {Component, Input} from '@angular/core';
import {Todo} from '../../todos.model';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {TodosState} from '../../todos.reducer';
import {selectTodos} from '../../todos.selectors';

@Component({
  selector: 'app-todos-list',
  template: ''
})
export class TodosListStubComponent {
  @Input() todos: Todo[];
}

describe('TodosListContainerComponent', () => {
  let component: TodosListContainerComponent;
  let fixture: ComponentFixture<TodosListContainerComponent>;
  let mockStore: MockStore<TodosState>;
  let mockTodosSelector: MemoizedSelector<TodosState, Todo[]>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore()
      ],
      declarations: [
        TodosListContainerComponent,
        TodosListStubComponent
      ]
    });

    await TestBed.compileComponents();

    mockStore = TestBed.get(Store);
    mockTodosSelector = mockStore.overrideSelector(selectTodos, []);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
