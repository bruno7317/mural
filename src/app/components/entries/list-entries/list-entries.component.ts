import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry/entry';
import { EntryService } from '../../../services/entry.service';

@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css']
})
export class ListEntriesComponent implements OnInit {

  entriesList: Entry[] = [];

  constructor(private service: EntryService) {}

  ngOnInit(): void {
    console.log('Component initialized. Fetching entries...');

    this.service.list().subscribe({
      next: (entriesList) => {
        console.log('Entries list received in component:', entriesList);
        this.entriesList = entriesList;
      },
      error: (error) => {
        console.error('Error fetching entries:', error);
      },
      complete: () => {
        console.log('Fetching entries completed.');
      }
    });
  }

  addEntry() {

  }
}
