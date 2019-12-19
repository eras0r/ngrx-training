import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todos-list-container',
  templateUrl: './todos-list-container.component.html',
  styleUrls: ['./todos-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListContainerComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

}
