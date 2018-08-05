import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatButtonModule} from '@angular/material';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
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

  ngOnInit() {
  }

}
