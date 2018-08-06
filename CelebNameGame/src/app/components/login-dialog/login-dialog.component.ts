import { Component, OnInit, Inject } from '@angular/core';
import { ScoreboardService } from '../../scoreboard.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatButtonModule } from '@angular/material';
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  constructor(private gd: ScoreboardService, private dialogRef:MatDialogRef<LoginDialogComponent>) {}

  nameField: FormControl = new FormControl();

  canceled: boolean = false;

  ngOnInit() {
  }

  loginOrRegister(){
    console.log("User: " + this.nameField.value);
    this.canceled = false;
    if(this.nameField.value){
      console.log(this.nameField.value)
      this.dialogRef.close();
    }
  }

  cancel(){
    this.canceled = true;
    this.dialogRef.close();
  }

}
