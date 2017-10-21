import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/model/post';
import { StoriesService  } from '../shared/services/stories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fap-storie-new',
  templateUrl: './storie-new.component.html',
  styleUrls: ['./storie-new.component.css']
})
export class StorieNewComponent implements OnInit {
  post: Post = {};
  constructor(private storiesService: StoriesService, private router: Router) { }

  ngOnInit() {
  }
   onNew(post: Post) {
    this.storiesService.addNewUser(post).subscribe(() => {
      console.log('Post Adionado', post);
   });
   }
   onHome() {
    this.router.navigate(['stories']);
   }
}
