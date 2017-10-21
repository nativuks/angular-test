
import { Component,
  OnInit,
  Input,
  Output,
  EventEmitter } from '@angular/core';
import { StoriesService } from '../shared/services/stories.service';
import { Post } from '../shared/model/post';


@Component({
  selector: 'fap-stories-item',
  templateUrl: './stories-item.component.html',
  styleUrls: ['./stories-item.component.css']
})
export class StoriesItemComponent implements OnInit {
  @Input()
  post: Post;
  @Output()
  select: EventEmitter<any> = new EventEmitter<any>();
  defaultPicture: string;
  constructor() { }

  ngOnInit() {

  }


  onClick(): void {
    // Propagar, emitir evento, objeto, etc.
    this.select.emit(this.post);
  }

}
