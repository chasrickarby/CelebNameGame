import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './components/search/search.service'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
