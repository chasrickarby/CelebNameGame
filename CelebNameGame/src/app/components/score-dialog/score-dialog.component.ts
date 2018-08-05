import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.score = data.score;
    this.minorMessage = data.minorMessage;
    console.log("Score: " + this.score);
    console.log("Message: " + this.minorMessage);
   }

  score: string;
  minorMessage: string;

  ngOnInit() {
  }

}
