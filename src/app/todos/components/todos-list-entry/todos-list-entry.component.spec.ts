import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosListEntryComponent} from './todos-list-entry.component';

describe('TodosListEntryComponent', () => {
  let component: TodosListEntryComponent;
  let fixture: ComponentFixture<TodosListEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodosListEntryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListEntryComponent);
    component = fixture.componentInstance;
    component.todo = {id: '1', name: 'eat a steak', completed: false};

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
