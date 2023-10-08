import { Ticket } from './ticket';

export interface Column {
  title: string;
  tickets: Ticket[];
}
