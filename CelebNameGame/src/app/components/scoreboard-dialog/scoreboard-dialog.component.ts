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
    console.log("SORT!")
    console.log(this.dataSource)
    this.dataSource.sort(this.compare);
    console.log("SORTED!")
    console.log(this.dataSource)
  }

  compare(a, b) {
    const percentageA = a.percentage;
    const percentageB = b.percentage;
  
    let comparison = 0;
    if (percentageA > percentageB) {
      comparison = -1;
    } else if (percentageA < percentageB) {
      comparison = 1;
    }
    return comparison;
  }

}
