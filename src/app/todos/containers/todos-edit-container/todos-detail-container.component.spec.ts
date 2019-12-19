import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosEditContainerComponent} from './todos-edit-container.component';
import {MemoizedSelector, Store} from '@ngrx/store';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from '../../todos.model';
import {SharedModule} from '../../../shared/shared.module';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {TodosState} from '../../todos.reducer';
import {selectSelectedTodo} from '../../todos.selectors';

@Component({
  selector: 'app-todos-edit',
  template: ''
})
export class TodosEditStubComponent {
  @Input() todo: Todo;
}

describe('TodosDetailContainerComponent', () => {
  let component: TodosEditContainerComponent;
  let fixture: ComponentFixture<TodosEditContainerComponent>;
  // let store: Store<any>;
  let mockStore: MockStore<TodosState>;
  let mockSelectedTodoSelector: MemoizedSelector<TodosState, Todo>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        // StoreModule.forRoot({}),
        SharedModule
      ],
      providers: [
        provideMockStore()
      ],
      declarations: [
        TodosEditContainerComponent,
        TodosEditStubComponent
      ]
    });

    await TestBed.compileComponents();

    mockStore = TestBed.get(Store);
    mockSelectedTodoSelector = mockStore.overrideSelector(selectSelectedTodo, null);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosEditContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
