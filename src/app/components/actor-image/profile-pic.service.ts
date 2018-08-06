import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ProfilePicService {
  apiKey: string = '333ef4bbd0f0a486ae7cefd18adcdad9';

  constructor(private _http: Http) { }

  private pathToPicture: string;
  private personId: string;

  search(id: string){
    let _URL = this.getQuery(id);
    return this._http.get(_URL);
  }

  private getQuery(personId: string){
    this.personId = personId;
    return "https://api.themoviedb.org/3/person/" + personId + "?api_key=" + this.apiKey;
  }
}
