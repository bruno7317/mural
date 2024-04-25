import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry/entry';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-list-entries',
  templateUrl: './list-entries.component.html',
  styleUrl: './list-entries.component.css'
})
export class ListEntriesComponent implements OnInit {

  constructor( private service: EntryService ) {}

  entriesList: Entry[] = []

  ngOnInit(): void {
    this.service.list().subscribe((entriesList) => {
      this.entriesList = entriesList;
    });
  }

  addEntry()
  {
  }
}
