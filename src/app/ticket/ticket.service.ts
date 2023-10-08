import { Injectable } from '@angular/core';
import { Priority, Status, Ticket, UnassignedUser } from '../models';
import { BehaviorSubject, merge, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private _todoTickets$ = new BehaviorSubject<Ticket[]>([
    new Ticket('Task 1', 'Lorem ipsum', new UnassignedUser(), Status.IN_PROGRESS, Priority.MEDIUM),
    new Ticket('Task 2', 'Lorem ipsum'),
    new Ticket('Task 3', 'Lorem ipsum'),
  ]);

  private _inProgressTickets$ = new BehaviorSubject<Ticket[]>([
    new Ticket('Task 1', 'Lorem ipsum', new UnassignedUser(), Status.IN_PROGRESS, Priority.HIGH),
    new Ticket('Task 2', 'Lorem ipsum', new UnassignedUser(), Status.IN_PROGRESS),
    new Ticket('Task 3', 'Lorem ipsum', new UnassignedUser(), Status.IN_PROGRESS),
    new Ticket('Task 4', 'Lorem ipsum', new UnassignedUser(), Status.IN_PROGRESS, Priority.HIGH),
    new Ticket('Task 5', 'Lorem ipsum', new UnassignedUser(), Status.IN_PROGRESS, Priority.LOW),
  ]);

  private _doneTickets = new BehaviorSubject<Ticket[]>([
    new Ticket('Task 1', 'Lorem ipsum', new UnassignedUser(), Status.DONE, Priority.LOW),
    new Ticket('Task 2', 'Lorem ipsum', new UnassignedUser(), Status.DONE, Priority.MEDIUM),
    new Ticket('Task 3', 'Lorem ipsum', new UnassignedUser(), Status.DONE),
  ]);
  get todoTickets$(): Observable<Ticket[]> {
    return this._todoTickets$.asObservable();
  }
  get inProgressTickets$(): Observable<Ticket[]> {
    return this._inProgressTickets$.asObservable();
  }
  get doneTickets$(): Observable<Ticket[]> {
    return this._doneTickets.asObservable();
  }

  get allTickets$(): Observable<Ticket[]> {
    return merge(this.todoTickets$, this.inProgressTickets$, this.doneTickets$);
  }
}
