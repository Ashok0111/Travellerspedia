import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RegisterModel, Auth_Model} from '../service_models/auth.model';
import {LoginModel} from '../service_models/auth.model';
import { environment } from '../../environments/environment';

import { Subject } from 'rxjs';

@Injectable(
    {providedIn: 'root',}

  )


  export class registration_service {
    registration_model : RegisterModel;
    login_model : LoginModel;
    auth_mode:Auth_Model;
    public baseURL = environment.apiUrl;
    constructor(private http : HttpClient) { }
    registration_process(user_reg:RegisterModel)
    {
      return this.http.post(this.baseURL+"auth/signup/",user_reg);
    }
    Login_process(login_form:LoginModel)
    {
      return this.http.post(this.baseURL+"auth/signin/",login_form);

    }

  }
