import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../shared/services/stories.service';
import { Post } from '../shared/model/post';
import { Router } from '@angular/router';

@Component({
  selector: 'fap-storie-detail',
  templateUrl: './storie-detail.component.html',
  styleUrls: ['./storie-detail.component.css']
})
export class StorieDetailComponent implements OnInit {
    post: Post;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private storiesService: StoriesService ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      console.log('Params', params);
        this.storiesService.getPost(params.id).subscribe((post: Post) => {
          this.post = post;
       });
      });
  }

  onUpdate(post: Post ) {
      this.storiesService.updatePost(post).subscribe(() => {
         console.log('Update');
      });
  }

  onHome() {
    this.router.navigate(['stories']);
   }

}
