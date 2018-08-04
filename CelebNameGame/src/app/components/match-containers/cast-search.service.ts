import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class CastSearchService {

  apiKey: string = '333ef4bbd0f0a486ae7cefd18adcdad9';

  constructor(private _http: Http) { }

  search(id: string){
    let _URL = this.getQuery(id);
    return this._http.get(_URL);
  }

  getQuery(movieId: string){
    return "https://api.themoviedb.org/3/movie/" + movieId + "/credits?api_key=" + this.apiKey;
  }
}
