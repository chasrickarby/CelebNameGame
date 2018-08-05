import { Component, OnInit, Input } from '@angular/core';
import { ProfilePicService } from './profile-pic.service';

@Component({
  selector: 'app-actor-image',
  templateUrl: './actor-image.component.html',
  styleUrls: ['./actor-image.component.css']
})
export class ActorImageComponent implements OnInit {
  @Input() actorId: string;

  profilePic: string;

  constructor(private picService: ProfilePicService) {}

  ngOnInit() {
    this.picService.search(this.actorId).subscribe(response =>{
      let specificPath = response.json().profile_path;
      this.profilePic = "https://image.tmdb.org/t/p/w500/" + specificPath;
    });
  }

}
