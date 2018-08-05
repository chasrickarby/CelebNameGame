import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { SearchService } from './search.service'
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';
import { MovieIdService } from '../movie-id.service';
import { MatInputModule } from '@angular/material';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _searchService: SearchService, private movieId: MovieIdService) {}

  results: any[] = [];
  response: any;
  queryField: FormControl = new FormControl();
  ngOnInit() {
    this.queryField.valueChanges
      .debounceTime(200)
      .switchMap(queryField =>
        {
          if(queryField.trim() != ""){
            return this._searchService.search(queryField)
          }else{
            this.results = [];
            return new EmptyObservable();
          }
        })
      .subscribe(response => {
        this.results = response.json().results
      });
  }

  clickEvent(id: string){
    this.movieId.changeId(id);

    // Clear the query Field so that it doesn't look like a search is 
    // still in progress
    this.queryField.setValue("");
  }

}
