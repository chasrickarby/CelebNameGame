import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButtonModule, MatTable } from '@angular/material';
import { ScoreboardService } from '../../scoreboard.service'


@Component({
  selector: 'app-scoreboard-dialog',
  templateUrl: './scoreboard-dialog.component.html',
  styleUrls: ['./scoreboard-dialog.component.css']
})
export class ScoreboardDialogComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<ScoreboardDialogComponent>, private gd: ScoreboardService, private dialog: MatDialog) { }

  dataSource = [];
  displayedColumns: string[] = ['name', 'score', 'played', 'percentage'];

  ngOnInit() {
    for(var element of this.gd.shareObj['global']){
      element.percentage = Math.round((element.score / element.played) * 100);
      if(element.score == 0 && element.played == 0){
        element.percentage = 0;
      }
      console.log("Accurace: " + element.percentage);
      console.log("Element: ")
      console.log(element);
    }

    this.dataSource = this.gd.shareObj['global'];
  }

}
