import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewEntryComponent } from './components/entries/new-entry/new-entry.component';
import { ListEntriesComponent } from './components/entries/list-entries/list-entries.component';
import { FormsModule } from '@angular/forms';
import { EntryComponent } from './components/entries/entry/entry.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AboutComponent } from './components/about/about.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { HomeComponent } from './home/home.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { NotificationBannerComponent } from './notification-banner/notification-banner.component';
import { FileComparisonDemoComponent } from './pages/file-comparison-demo/file-comparison-demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewEntryComponent,
    ListEntriesComponent,
    EntryComponent,
    AboutComponent,
    ProjectCardComponent,
    HomeComponent,
    ProjectDetailComponent,
    CarouselComponent,
    HighlightsComponent,
    NotificationBannerComponent,
    FileComparisonDemoComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())]
})
export class AppModule {}
