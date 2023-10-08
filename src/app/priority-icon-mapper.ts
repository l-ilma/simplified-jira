import { Priority } from './models';

export class PriorityIconMapper {
  private static readonly priorityIconMap = new Map<Priority, string>([
    [Priority.UNKNOWN, 'assets/icons/unknown-priority.png'],
    [Priority.LOW, 'assets/icons/low-priority.png'],
    [Priority.MEDIUM, 'assets/icons/medium-priority.png'],
    [Priority.HIGH, 'assets/icons/high-priority.png'],
  ]);

  static getPriorityIcon(priority: Priority): string {
    return this.priorityIconMap.get(priority) ?? 'assets/icons/unknown-priority.png';
  }
}
