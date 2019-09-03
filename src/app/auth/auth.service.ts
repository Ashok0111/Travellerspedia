import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {
    public baseURL = environment.apiUrl;
  constructor(public http : HttpClient) {

  }
  // ...
  
  public send_token()
  {
    let headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    headers = headers.append('Authorization', localStorage.getItem('a-t'));
    const httpOptions= {
      headers: headers
    };
    return this.http.get(this.baseURL+"auth/validate/",httpOptions).toPromise();
  }
}