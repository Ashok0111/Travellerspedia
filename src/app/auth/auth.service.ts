import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class AuthService {
    public baseURL = environment.apiUrl;
  constructor(public http : HttpClient) {}
  // ...
  public send_token()
  {
    let token={
        "token":localStorage.getItem('a-t')
    };
    console.log(token,"Token");
    return this.http.post(this.baseURL+"auth/guard/",token).toPromise();
  }
}