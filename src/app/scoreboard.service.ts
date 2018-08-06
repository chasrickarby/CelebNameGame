import { Injectable } from '@angular/core';

interface ScoreBoardObj {
  [id: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {
  shareObj: ScoreBoardObj = [{}];
  loggedIn = {};
}
