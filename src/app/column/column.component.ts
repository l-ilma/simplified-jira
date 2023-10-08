import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Column, Ticket } from '../models';
import { NgForOf, NgIf } from '@angular/common';
import { CardComponent } from '../card/card.component';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [NgForOf, CardComponent, CdkDrag, CdkDropList, NgIf],
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {
  @Input({ required: true }) data: Column | null = null;

  onTicketDropped(event: CdkDragDrop<Ticket[], Ticket[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
