import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodosEditContainerComponent} from './todos-edit-container.component';
import {Store, StoreModule} from '@ngrx/store';

describe('TodosDetailContainerComponent', () => {
  let component: TodosEditContainerComponent;
  let fixture: ComponentFixture<TodosEditContainerComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [TodosEditContainerComponent]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosEditContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<any>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
