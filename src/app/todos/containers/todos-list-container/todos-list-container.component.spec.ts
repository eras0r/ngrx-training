import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosListContainerComponent } from './todos-list-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TodosListContainerComponent', () => {
  let component: TodosListContainerComponent;
  let fixture: ComponentFixture<TodosListContainerComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TodosListContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
