import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ColumnComponent } from './column/column.component';
import { NgForOf } from '@angular/common';
import { ColumnConfig } from './models/column.config';
import { CardConfig } from './models/card.config';
import { Status } from './models/status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ColumnComponent, NgForOf],
})
export class AppComponent {
  protected columns: ColumnConfig[] = [
    {
      title: 'TODO',
      cards: [
        new CardConfig('Task 1', 'Lorem ipsum', Status.TO_DO),
        new CardConfig('Task 2', 'Lorem ipsum', Status.TO_DO),
        new CardConfig('Task 3', 'Lorem ipsum', Status.TO_DO),
      ],
    },
    {
      title: 'IN PROGRESS',
      cards: [
        new CardConfig('Task 1', 'Lorem ipsum', Status.IN_PROGRESS),
        new CardConfig('Task 2', 'Lorem ipsum', Status.IN_PROGRESS),
        new CardConfig('Task 3', 'Lorem ipsum', Status.IN_PROGRESS),
      ],
    },
    {
      title: 'DONE',
      cards: [
        new CardConfig('Task 1', 'Lorem ipsum', Status.DONE),
        new CardConfig('Task 2', 'Lorem ipsum', Status.DONE),
        new CardConfig('Task 3', 'Lorem ipsum', Status.DONE),
      ],
    },
  ];
}
