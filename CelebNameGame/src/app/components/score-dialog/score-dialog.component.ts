import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButtonModule} from '@angular/material';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef:MatDialogRef<ScoreDialogComponent>) {
    this.score = data.score;
    this.minorMessage = data.minorMessage;
    this.totalPossible = data.totalPossible;
    console.log("Score: " + this.score);
    console.log("Total Posible: " + this.totalPossible);
    console.log("Message: " + this.minorMessage);
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

}
