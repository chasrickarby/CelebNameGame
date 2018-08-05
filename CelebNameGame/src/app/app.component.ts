import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  configForNewGame: boolean = true;

  newGame(newGame: boolean){
    console.log("CONFIG FOR NEW GAME: " + newGame);
    this.configForNewGame = newGame;
  }
}
