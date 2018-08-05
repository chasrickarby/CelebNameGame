import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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

import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { ScoreDialogComponent } from './components/score-dialog/score-dialog.component';
import { ScoreboardService } from './scoreboard.service';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ActorImageComponent,
    ActorNameComponent,
    MatchContainersComponent,
    ScoreDialogComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    DndModule.forRoot(),
    MatButtonModule,
    MatInputModule,
    MatDialogModule
    ],
  providers: [
    SearchService,
    ScoreboardService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ScoreDialogComponent,
    LoginDialogComponent
  ]
})
export class AppModule { }
