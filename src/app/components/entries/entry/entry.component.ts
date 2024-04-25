import { Component, Input } from '@angular/core';
import { Entry } from './entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.css'
})
export class EntryComponent {

  @Input()
  entry: Entry = {
    id: 0,
    entry_text: "",
    entry_author: "",
    entry_font: ""
  }

  editEntry()
  {
  }

  deleteEntry()
  {
  }
}
