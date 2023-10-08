import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from '../models';
import { PriorityIconMapper } from '../priority-icon-mapper';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input({ required: true }) data: Ticket | null = null;
  protected readonly PriorityIconMapper = PriorityIconMapper;
}
