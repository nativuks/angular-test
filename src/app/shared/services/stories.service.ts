import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post} from '../model/post';
import { Observable } from 'rxjs/Observable';

const BASE_URL = 'http://localhost:3000/';
const POSTS = 'posts';
const EDIT = 'edit/';
@Injectable()
export class StoriesService {
   stories: Post[];
  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<any> {
    return this.httpClient.get(`${BASE_URL}${POSTS}`);
  }

  getPost(id: number): Observable<any> {
    return this.httpClient.get(`${BASE_URL}${POSTS}/${id}`);
  }
  updatePost(post: Post): Observable<any> {
     return this.httpClient.put(`${BASE_URL}${POSTS}/${post.id}`, post);
  }

  addNewUser(post): Observable<any> {
    return this.httpClient.post(`${BASE_URL}${POSTS}`, post);
  }
}
