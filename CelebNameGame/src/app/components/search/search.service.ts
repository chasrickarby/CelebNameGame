import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'

@Injectable()
export class SearchService {

  apiKey: string = '333ef4bbd0f0a486ae7cefd18adcdad9';
  baseUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=' + this.apiKey + '&language=en-US&query='

  constructor(private _http: Http) { }

  search(queryString: string){
    let _URL = this.baseUrl + queryString;
    return this._http.get(_URL);
  }

}
