import { Component, OnInit, OnDestroy } from '@angular/core';
import { Entry } from '../entry/entry';
import { EntryService } from '../../../services/entry.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css']
})
export class ListEntriesComponent implements OnInit, OnDestroy {

  entriesList: Entry[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private service: EntryService) {}

  ngOnInit(): void {
    this.fetchEntries();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  fetchEntries(): void {
    this.subscription.add(
      this.service.list().subscribe({
        next: (entriesList) => {
          this.entriesList = entriesList;
        },
        error: this.handleError
      })
    );
  }

  onEntryCreated(newEntry: Entry): void {
    this.entriesList.unshift(newEntry);
  }

  private handleError(error: any): void {
    console.error('Error fetching entries:', error);

  }
}
