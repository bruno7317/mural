import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from '../entry/entry';

@Component({
  selector: 'app-update-entry',
  templateUrl: './update-entry.component.html',
  styleUrl: './update-entry.component.css'
})
export class UpdateEntryComponent implements OnInit {

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

  updateEntry() {
    this.service.update(this.entry).subscribe(() => {
      this.router.navigate(['/listEntries'])
    })
  }

  cancel()
  {
  }

}
