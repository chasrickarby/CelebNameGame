import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieIdService {

  private messageSource = new BehaviorSubject(undefined);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeId(id: string) {
    this.messageSource.next(id)
  }
}
