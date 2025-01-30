import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewEntryComponent } from './components/entries/new-entry/new-entry.component';
import { ListEntriesComponent } from './components/entries/list-entries/list-entries.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FileComparisonDemoComponent } from './pages/file-comparison-demo/file-comparison-demo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'newEntry', component: NewEntryComponent },
  { path: 'listEntries', component: ListEntriesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'file-comparison-demo', component: FileComparisonDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
