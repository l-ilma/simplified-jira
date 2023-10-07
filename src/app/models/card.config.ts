import { Status } from './status';

export class CardConfig {
  title: string;
  description: string;
  status: Status;

  constructor(title: string, description: string, status: Status) {
    this.title = title;
    this.description = description;
    this.status = status;
  }
}
