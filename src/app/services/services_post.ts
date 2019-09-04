import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post_area } from '../service_models/api_service.model';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
@Injectable(
    {providedIn: 'root',}
     
  )
  export class posting_service {
    post_model : Post_area;
    public baseURL = environment.apiUrl;
    constructor(private http : HttpClient) { }
    create_post(post_data:Post_area)
    {
        console.log(post_data,"post_data");
        let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
        headers = headers.append('Authorization', 'Bearer '+localStorage.getItem('a-t'));
        const httpOptions= {
          headers: headers
        };
      return this.http.post(this.baseURL+"post/",post_data,httpOptions);
    }

  }
  