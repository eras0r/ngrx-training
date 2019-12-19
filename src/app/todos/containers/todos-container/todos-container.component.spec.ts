import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosContainerComponent } from './todos-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TodosContainerComponent', () => {
  let component: TodosContainerComponent;
  let fixture: ComponentFixture<TodosContainerComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TodosContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
