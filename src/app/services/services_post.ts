import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post_area } from '../service_models/api_service.model';

import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Post_like } from '../service_models/auth.model';
@Injectable(
    {providedIn: 'root',}

  )
  export class posting_service {
    post_model : Post_area;
    post_likemodel:Post_like;
    public baseURL = environment.apiUrl;
    constructor(private http : HttpClient) { }
    create_post(post_data:Post_area)
    {
        let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        headers = headers.append('Authorization', 'Bearer '+localStorage.getItem('a-t'));
        const httpOptions= {
          headers: headers
        };
      return this.http.post(this.baseURL+"post/",post_data,httpOptions);
    }
    get_public_posts()
    {
      let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      headers = headers.append('Authorization', 'Bearer '+localStorage.getItem('a-t'));
      const httpOptions= {
        headers: headers
      };
      return this.http.get(this.baseURL+"post/all/",httpOptions).toPromise();
    }
    like_post(post_op:Post_like)
    {
      let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      headers = headers.append('Authorization', 'Bearer '+localStorage.getItem('a-t'));
      const httpOptions= {
        headers: headers
      };
    return this.http.post(this.baseURL+"post/like",post_op,httpOptions);
    }
    dislike_post(post_op:Post_like)
    {
      let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
      headers = headers.append('Authorization', 'Bearer '+localStorage.getItem('a-t'));
      const httpOptions= {
        headers: headers
      };
    return this.http.post(this.baseURL+"post/dislike",post_op,httpOptions);
    }

  }
