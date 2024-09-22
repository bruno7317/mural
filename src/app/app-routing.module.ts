import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewEntryComponent } from './components/entries/new-entry/new-entry.component';
import { ListEntriesComponent } from './components/entries/list-entries/list-entries.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';  // Import the ProjectDetailComponent

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newEntry', component: NewEntryComponent },
  { path: 'listEntries', component: ListEntriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
