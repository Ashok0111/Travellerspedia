import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RegisterModel} from '../service_models/auth.model';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable(
    {providedIn: 'root',}
     
  )
  export class registration_service {
    registration_model : RegisterModel;
    public baseURL = environment.apiUrl;
    constructor(private http : HttpClient) { }
    registration_process(user_reg:RegisterModel)
    {
      return this.http.post(this.baseURL+"auth/signup/",user_reg);
    }


  }
  