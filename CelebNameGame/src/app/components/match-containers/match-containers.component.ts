import { Component, OnInit } from '@angular/core';
import { ActorImageComponent } from '../actor-image/actor-image.component';
import { ActorNameComponent } from '../actor-name/actor-name.component';
import { CastSearchService } from './cast-search.service';
import { MovieIdService } from '../movie-id.service';

import { Observable } from 'rxjs/Rx'
import { MatButtonModule } from '@angular/material';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-match-containers',
  templateUrl: './match-containers.component.html',
  styleUrls: ['./match-containers.component.css']
})
export class MatchContainersComponent implements OnInit {

  constructor(private movieId: MovieIdService, private castService: CastSearchService) { }

  id: string;

  actorNames = [];
  actorIds = [];
  response: any;
  actors = [];

  ngOnInit() {
    this.movieId.currentMessage.subscribe(id => {
      this.id = id
      if(id){
        let response = this.castService.search(id).subscribe(result => {
          this.response = result.json().cast;
          for(let result of this.response){
            console.log("Id: " + result.id)
            console.log("Name: " + result.name)
            this.actorIds.push(result.id);
            this.actorNames.push(result.name)
          }
          console.log(this.response);
        });
      }
      
    });
  }

}
