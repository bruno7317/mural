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
    id: "",
    message: "",
    name: ""
  }

  editEntry()
  {
  }

  deleteEntry()
  {
  }
}
