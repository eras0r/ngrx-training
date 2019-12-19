import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosDetailContainerComponent } from './todos-detail-container.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TodosDetailContainerComponent', () => {
  let component: TodosDetailContainerComponent;
  let fixture: ComponentFixture<TodosDetailContainerComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TodosDetailContainerComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosDetailContainerComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
