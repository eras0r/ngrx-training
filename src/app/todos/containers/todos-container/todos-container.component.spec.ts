import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosContainerComponent} from './todos-container.component';
import {Store, StoreModule} from '@ngrx/store';
import {Component} from '@angular/core';
import {removeCompletedTodos} from '../../todos.actions';
import {TodosState} from '../../todos.reducer';

@Component({
  selector: 'app-todos-list-container',
  template: ''
})
export class TodosListContainerStubComponent {
}

@Component({
  selector: 'app-todos-edit-container',
  template: ''
})
export class TodosEditContainerComponent {
}

describe('TodosContainerComponent', () => {
  let component: TodosContainerComponent;
  let fixture: ComponentFixture<TodosContainerComponent>;
  let store: Store<TodosState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [
        TodosContainerComponent,
        TodosListContainerStubComponent,
        TodosEditContainerComponent
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<TodosState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch removeCompleted todos when clicking on remove completed todos', () => {
    component.removeCompletedTodos();
    expect(store.dispatch).toHaveBeenCalledWith(removeCompletedTodos());
  });
});
