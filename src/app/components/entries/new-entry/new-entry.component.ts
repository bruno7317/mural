import { Component } from '@angular/core';
import { Entry } from '../entry/entry';
import { EntryService } from '../../../services/entry.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent {

  new_entry: Entry = {
    id: "",
    message: "",
    name: ""
  }

  constructor(
    private service: EntryService,
    private router: Router
  ) {}

  saveEntry() {
    if (!this.new_entry.message || !this.new_entry.name) {
      alert("Both message and author name are required!");
      return;
    }

    this.service.create(this.new_entry).subscribe({
      next: () => {
        this.router.navigate(['/listEntries']);
        this.clearEntry();
      },
      error: (err) => {
        console.error("Error saving the entry:", err);
        alert("Failed to save the entry. Please try again later.");
      }
    });
  }

  clearEntry() {
    this.new_entry = { id: "", message: "", name: "" };
  }
}
