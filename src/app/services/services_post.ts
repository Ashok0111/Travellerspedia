import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post_area } from '../service_models/api_service.model';
import { Observable, Subject } from 'rxjs';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Post_like } from '../service_models/auth.model';
import { Profile_picture } from '../service_models/auth.model';
import { Search_all } from '../service_models/auth.model';

@Injectable(
    {providedIn: 'root',}
  )

  export class posting_service {
    post_model : Post_area;
    search_model:Search_all;
    post_likemodel:Post_like;
    public baseURL = environment.apiUrl;
    constructor(private http : HttpClient) { }
    private subject = new Subject<any>();

    sendMessage(message: any) {
        this.subject.next( message);
    }
    getMessage(): Observable<any> {
      return this.subject.asObservable();
  }

    create_post(post_data:Post_area)
    {
        let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        headers = headers.append('Authorization', 'Bearer '+localStorage.getItem('a-t'));
        const httpOptions= {
          headers: headers
        };
      return this.http.post(this.baseURL+"post/",post_data,httpOptions);
    }
    upload_profilepic(profile_data:Profile_picture)
    {
        let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        headers = headers.append('Authorization', 'Bearer '+localStorage.getItem('a-t'));
        const httpOptions= {
          headers: headers
        };
      return this.http.post(this.baseURL+"profile/upload",profile_data,httpOptions);
    }
    search_service(search_data:Search_all)
    {
      console.log(search_data,"search_data");
        let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        headers = headers.append('Authorization', 'Bearer '+localStorage.getItem('a-t'));
        const httpOptions= {
          headers: headers
        };
      return this.http.post(this.baseURL+"search",search_data,httpOptions);
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
