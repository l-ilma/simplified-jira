import { ChangeDetectionStrategy, Component, inject, QueryList, ViewChildren } from '@angular/core';
import { ColumnComponent } from './column/column.component';
import { AsyncPipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { Column } from './models';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { TicketService } from './ticket/ticket.service';
import { CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ColumnComponent, NgForOf, NgClass, AsyncPipe, NgIf, CdkDropList, CdkDropListGroup],
})
export class AppComponent {
  @ViewChildren(ColumnComponent) columns!: QueryList<ColumnComponent>;
  private breakpointObserver = inject(BreakpointObserver);
  private ticketService = inject(TicketService);

  protected isPhonePortrait$: Observable<boolean>;
  protected columns$!: Observable<Column[]>;

  constructor() {
    this.isPhonePortrait$ = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches),
      startWith(false),
      takeUntilDestroyed()
    );

    this.initializeColumns();
  }

  private initializeColumns(): void {
    this.columns$ = combineLatest([
      this.ticketService.todoTickets$,
      this.ticketService.inProgressTickets$,
      this.ticketService.doneTickets$,
    ]).pipe(
      map(([todo, inProgress, done]) => {
        return [
          {
            title: 'To Do',
            tickets: todo,
          },
          {
            title: 'In Progress',
            tickets: inProgress,
          },
          {
            title: 'Done',
            tickets: done,
          },
        ];
      }),
      startWith([])
    );
  }
}
