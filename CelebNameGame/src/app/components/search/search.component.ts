import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { SearchService } from '../search/search.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _searchService: SearchService) {}

  results: any[] = [];
  queryField: FormControl = new FormControl();
  ngOnInit() {
    console.log('here');
    console.log(this.queryField.value);
    this.queryField.valueChanges.subscribe( result => console.log(result));
  }

}
