import { Status } from './status';
import { UnassignedUser, User } from './user';
import { Priority } from './priority';

export class Ticket {
  title: string;
  description: string;
  assignee: User;
  priority: Priority;
  status: Status;

  constructor(
    title: string,
    description: string,
    assignee?: User,
    status?: Status,
    priority?: Priority
  ) {
    this.title = title;
    this.description = description;
    this.assignee = assignee ?? new UnassignedUser();
    this.priority = priority ?? Priority.UNKNOWN;
    this.status = status ?? Status.TO_DO;
  }
}
