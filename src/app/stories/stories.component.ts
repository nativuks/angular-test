import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoriesService } from '../shared/services/stories.service';
import { Post } from '../shared/model/post';

@Component({
  selector: 'fap-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  posts: Post[];
  constructor( private postService: StoriesService, private router: Router) { }

  ngOnInit() {
    this.postService.getPosts().subscribe((data) => {
      console.log('data', data);
      this.posts = data;
    });
  }

  onSelect(event: Post) {
    console.log('Selected', event.title);
    this.router.navigate(['edit', event.id]);
  }

  onClick(post: Post) {
    this.router.navigate(['new']);
  }


}
