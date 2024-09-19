import { Component } from '@angular/core';
import { Entry } from '../entry/entry';
import { EntryService } from '../../../services/entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrl: './new-entry.component.css'
})
export class NewEntryComponent {

  constructor(
    private service: EntryService,
    private router: Router
  ) {}

  new_entry: Entry = {
    id: "",
    message: "Lorem ipsum",
    name: "dolor"
  }

  saveEntry()
  {
    this.service.create(this.new_entry).subscribe(() => {
      this.router.navigate(['/listEntries'])
    })
  }

  cancelEntry()
  {
  }

}
