import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ColumnConfig } from '../models/column.config';
import { NgForOf } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [NgForOf, CardComponent],
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ColumnComponent {
  @Input({ required: true }) data: ColumnConfig | null = null;
}
