import { Component } from '@angular/core';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component'
import { MatButtonModule, MatDialog, MatDialogRef } from '@angular/material';
import { ScoreboardService } from './scoreboard.service'
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  configForNewGame: boolean = true;
  name: string;

  constructor (private dialog: MatDialog, private gd: ScoreboardService, public snackBar: MatSnackBar) {}

  dialogRef: MatDialogRef<LoginDialogComponent>;

  newGame(newGame: boolean){
    this.configForNewGame = newGame;
  }

  login(){
    this.dialogRef = this.dialog.open(LoginDialogComponent, {
      disableClose: true
    });

    this.dialogRef.afterClosed().subscribe(() => {
      if(this.gd.shareObj['global']===undefined){
        this.gd.shareObj['global'] = [];
      }

      let dialog = this.dialogRef.componentInstance;
      
      // If they canceled, get out
      if(dialog.canceled){
        return;
      }
      this.name = dialog.nameField.value;

      if(!this.userExists(this.name)){
        // Add user
        this.gd.shareObj['global'].push({name: this.name, score: 0, played: 0});
        this.loginUser(this.name);
        this.openSnackBar(this.name, "Created and logged in")
      }else{
        // Just log the user in
        this.loginUser(this.name);
        this.openSnackBar(this.name, "Logged in")
      }
      
      console.log(this.gd.shareObj['global']);
      console.log(this.gd.loggedIn['global']);
    });
  }

  private userExists(name: string){
    for(var entry of this.gd.shareObj['global']){
      if(entry.name == name && name && entry.name){
        console.log("User Exists")
        return true;
      }
    }
    return false;
  }

  private loginUser(user: string){
    // We already know that the user is in the list because userExists returned true in login()
    for(var entry of this.gd.shareObj['global']){
      console.log(entry.name + " =?= " + user)
      console.log(entry);
      if(entry.name == user){
        // Set the logged in element of the global data to the correct user.
        this.gd.loggedIn['global'] = entry;
        console.log("Logged in ---->");
        console.log(this.gd.loggedIn['global']);
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
