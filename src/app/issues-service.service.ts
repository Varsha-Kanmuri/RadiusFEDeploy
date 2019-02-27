import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { UserInfo } from './Userinfo';


@Injectable({
  providedIn: 'root'
})
export class IssuesServiceService {

  constructor(private http: HttpClient) { }

  fetchOpenIssuesCount(user: UserInfo): Observable<any> {
      
      return this.http.get(`https://sleepy-chamber-42828.herokuapp.com/issues?owner=${user.owner}&reponame=${user.repositoryName}`);

  }
}
