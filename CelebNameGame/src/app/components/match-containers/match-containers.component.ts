import { Component, OnInit } from '@angular/core';
import { ActorImageComponent } from '../actor-image/actor-image.component';
import { ActorNameComponent } from '../actor-name/actor-name.component';
import { CastSearchService } from './cast-search.service';
import { MovieIdService } from '../movie-id.service';
import { ScoreDialogComponent } from '../score-dialog/score-dialog.component'

import { Observable } from 'rxjs/Rx'
import { MatButtonModule, MatDialog, MatDialogRef } from '@angular/material';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-match-containers',
  templateUrl: './match-containers.component.html',
  styleUrls: ['./match-containers.component.css']
})
export class MatchContainersComponent implements OnInit {

  constructor(private movieId: MovieIdService, private castService: CastSearchService, private dialog: MatDialog) { }

  id: string;

  actorNames = [];
  actorIds = [];
  response: any;
  correctActorNameList = [];

  dialogRef: MatDialogRef<ScoreDialogComponent>;

  ngOnInit() {
    this.actorNames = [];
    this.correctActorNameList = [];
    this.movieId.currentMessage.subscribe(id => {
      this.id = id
      if(id){
        let response = this.castService.search(id).subscribe(result => {
          this.response = result.json().cast;
          let index = 0;
          for(let result of this.response){

            // We only want the first five actors
            if(index >= 5){
              break;
            }
            this.actorIds.push(result.id);
            this.actorNames.push(result.name);
            index++;
          }

          // Save off the correct list of actors before shuffling
          this.correctActorNameList = this.actorNames.slice(0);

          // Randomize!
          this.actorNames = this.shuffle(this.actorNames);
        });
      }
      
    });
  }

  private shuffle(array) {
    var index = array.length, temporaryValue, randomIndex;
  
    // Go through all the elements in the array
    while (0 !== index) {
  
      // Pick another element at random
      randomIndex = Math.floor(Math.random() * index);
      index -= 1;
  
      // swap the current and random elements
      temporaryValue = array[index];
      array[index] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  private score(){
    let points = 0;
    for(var i = 0; i < this.correctActorNameList.length; i++){
      console.log(this.correctActorNameList[i] + " == " + this.actorNames[i]+ "?")
      let expected: string = this.correctActorNameList[i];
      let actual: string = this.actorNames[i];
      if(expected === actual ){
        points++;
      }
    }

    let minorMessage: string;
    let pointPercentage = points/this.correctActorNameList.length;

    if(pointPercentage == 1){
      minorMessage = "Movie Buff Status!"
    }else if(pointPercentage >= 0.5){
      minorMessage = "Good, not great."
    }else if(pointPercentage == 0){
      minorMessage = "Are you sure you've seen this one?"
    }else{
      minorMessage = "Maybe give this one another watch and try again."
    }

    this.dialogRef = this.dialog.open(ScoreDialogComponent, {
      data: {score: points, minorMessage: minorMessage, totalPossible: this.correctActorNameList.length},
      disableClose: true
    });
    console.log("Your score: " + points);
  }

}
