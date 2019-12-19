import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TodosState} from '../../todos.reducer';

@Component({
  selector: 'app-todos-detail-container',
  templateUrl: './todos-detail-container.component.html',
  styleUrls: ['./todos-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosDetailContainerComponent implements OnInit {

  constructor(private store: Store<TodosState>) {
  }

  ngOnInit() {
  }

}
