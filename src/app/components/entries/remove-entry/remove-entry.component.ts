import { EntryService } from './../entry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry/entry';

@Component({
  selector: 'app-remove-entry',
  templateUrl: './remove-entry.component.html',
  styleUrl: './remove-entry.component.css'
})
export class RemoveEntryComponent implements OnInit {

  constructor(
    private service: EntryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  entry: Entry = {
    id: 0,
    entry_text: "",
    entry_author: "",
    entry_font: ""
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.read(parseInt(id!)).subscribe((entry) => {
      this.entry = entry
    })
  }

  removeEntry() {
    this.service.delete(this.entry.id!).subscribe(() => {
      this.router.navigate(['/listEntries'])
    })
  }

  cancel()
  {
  }
}
