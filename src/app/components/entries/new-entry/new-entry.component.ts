import { Component, EventEmitter, Output } from '@angular/core';
import { Entry } from '../entry/entry';
import { EntryService } from '../../../services/entry.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.css']
})
export class NewEntryComponent {
  @Output() entryCreated = new EventEmitter<Entry>();

  newEntry: Entry = {
    id: "",
    message: "",
    name: ""
  };

  hasSubmitted: boolean = this.isFormLocked();

  constructor(private service: EntryService) {}

  saveEntry(form: NgForm) {
    if (!form.valid) {
      alert("Both message and author name are required!");
      return;
    }

    this.service.create(this.newEntry).subscribe({
      next: (createdEntry) => {
        this.clearEntry();
        this.lockForm();
        this.entryCreated.emit(createdEntry);
        this.showToasty();
      },
      error: (err) => {
        console.error("Error saving the entry:", err);
        alert("Failed to save the entry. Please try again later.");
      }
    });
  }

  private lockForm() {
    localStorage.setItem('guestbook_submitted', 'true');
    this.hasSubmitted = true;
  }

  private isFormLocked(): boolean {
    return localStorage.getItem('guestbook_submitted') === 'true';
  }

  public clearEntry() {
    this.newEntry = { id: "", message: "", name: "" };
  }

  private showToasty() {
    const toasty = document.getElementById('toasty');
    const audio = document.getElementById('toasty-audio') as HTMLAudioElement;

    if (toasty) {
      toasty.classList.remove('hidden');
      toasty.classList.add('show');

      if (audio) {
        audio.play();
      }

      setTimeout(() => {
        toasty.classList.remove('show');
        toasty.classList.add('hidden');
      }, 1500);
    }
  }
}
