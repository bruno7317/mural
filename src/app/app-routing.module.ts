import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEntryComponent } from './components/entries/new-entry/new-entry.component';
import { ListEntriesComponent } from './components/entries/list-entries/list-entries.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listEntries',
    pathMatch: 'full'
  },
  {
    path: 'newEntry',
    component: NewEntryComponent
  },
  {
    path: 'listEntries',
    component: ListEntriesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
