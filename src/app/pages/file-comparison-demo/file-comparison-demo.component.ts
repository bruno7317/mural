import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface ChangedAttribute {
  attribute: string;
  oldValue: string;
  newValue: string;
}

interface PetEntry {
  id: number;
  name: string;
  owner: string;
  type: 'cat' | 'dog' | 'bird';
  status: 'New' | 'Changed' | 'Removed';
  changedAttributes?: ChangedAttribute[];
  expanded?: boolean;
}

@Component({
  selector: 'app-file-comparison-demo',
  templateUrl: './file-comparison-demo.component.html',
  styleUrls: ['./file-comparison-demo.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', overflow: 'hidden', opacity: 0 })),
      state('expanded', style({ height: '*', opacity: 1 })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class FileComparisonDemoComponent {

  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  petEntries: PetEntry[] = [
    { id: 1, name: 'Bella',  owner: 'Alice',   type: 'cat',  status: 'New' },
    {
      id: 2,
      name: 'Max',
      owner: 'Bob',
      type: 'dog',
      status: 'Changed',
      changedAttributes: [
        { attribute: 'Name', oldValue: 'Maximus', newValue: 'Max' }
      ]
    },
    { id: 3, name: 'Charlie', owner: 'Carol',  type: 'bird', status: 'Removed' },
    {
      id: 4,
      name: 'Luna',
      owner: 'Dave',
      type: 'cat',
      status: 'Changed',
      changedAttributes: [
        { attribute: 'Owner', oldValue: 'Daniel', newValue: 'Dave' }
      ]
    },
    { id: 5, name: 'Molly',  owner: 'Eve',     type: 'dog',  status: 'New' },
    { id: 6, name: 'Lucy',   owner: 'Frank',   type: 'bird', status: 'Removed' },
    {
      id: 7,
      name: 'Buddy',
      owner: 'Helen',
      type: 'dog',
      status: 'Changed',
      changedAttributes: [
        { attribute: 'Name',  oldValue: 'Bud',    newValue: 'Buddy' },
        { attribute: 'Owner', oldValue: 'Henry',  newValue: 'Helen' }
      ]
    },
    { id: 8, name: 'Daisy',  owner: 'Irene',   type: 'cat',  status: 'New' },
    { id: 9, name: 'Rocky',  owner: 'Jake',    type: 'dog',  status: 'Removed' },
    { id: 10, name: 'Tweety', owner: 'Laura',  type: 'bird', status: 'New' }
  ];

  toggleRowExpansion(entry: PetEntry): void {
    if (entry.status === 'Changed') {
      entry.expanded = !entry.expanded;
    }
  }

  sortPetsBy(column: keyof PetEntry, event: MouseEvent): void {
    event.stopPropagation();
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.petEntries.sort((a, b) => this.compareValues(a, b, column));
  }

  private compareValues(a: PetEntry, b: PetEntry, column: keyof PetEntry): number {
    const directionMultiplier = this.sortDirection === 'asc' ? 1 : -1;
    let valueA = a[column];
    let valueB = b[column];
    if (column === 'id') {
      return (Number(valueA) - Number(valueB)) * directionMultiplier;
    }
    const strA = String(valueA).toLowerCase();
    const strB = String(valueB).toLowerCase();
    if (strA < strB) return -1 * directionMultiplier;
    if (strA > strB) return 1 * directionMultiplier;
    return 0;
  }
}
