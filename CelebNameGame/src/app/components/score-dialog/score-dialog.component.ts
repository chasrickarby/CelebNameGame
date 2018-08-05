import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButtonModule } from '@angular/material';
import { ScoreboardService } from '../../scoreboard.service'
// import { ScoreboardDialog } from '../'

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef:MatDialogRef<ScoreDialogComponent>, private gd: ScoreboardService, private dialog: MatDialog) {
    this.score = data.score;
    this.minorMessage = data.minorMessage;
    this.totalPossible = data.totalPossible;

    // If we've got someone logged in
    if(this.gd.loggedIn['global']){
      // Modify the score of the logged in player
      this.gd.loggedIn['global'].score += this.score;
      this.gd.loggedIn['global'].played += this.totalPossible;
      console.log("Tada we've updated the score: ");
      console.log(this.gd.loggedIn['global']);
    }else{
      console.log("We're not logged in.");
    }
   }

  score: string;
  minorMessage: string;
  totalPossible: string;

  retry: boolean;
  newGame: boolean;

  ngOnInit() {
  }

  closeAndRetry(){
    this.newGame = false;
    this.retry = true;
    this.dialogRef.close();
  }

  closeAndNewGame(){
    this.newGame = true;
    this.retry = false;
    this.dialogRef.close();
  }

  showScoreboard(){
    if(this.gd.loggedIn['global']){
      console.log("Show me the scores!");
      console.log(this.gd.shareObj['global']);
    }else{
      console.log("Not logged in");
    }
  }
}