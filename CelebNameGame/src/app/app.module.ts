import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DndModule } from 'ng2-dnd';


import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SearchService } from './components/search/search.service';
import { ActorImageComponent } from './components/actor-image/actor-image.component';
import { ActorNameComponent } from './components/actor-name/actor-name.component';
import { MatchContainersComponent } from './components/match-containers/match-containers.component'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ActorImageComponent,
    ActorNameComponent,
    MatchContainersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    DndModule.forRoot()
    ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
