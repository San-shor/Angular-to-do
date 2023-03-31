import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Topic } from './topic';

@Injectable({
  providedIn: 'root'
})
export class ApiclientService {
  URL='https://private-anon-2a6d40fd27-codemocracy.apiary-mock.com/topics'

  constructor(private http:HttpClient) { }

  getAllTopics():Observable<Topic[]>{
    return this.http.get<Topic[]>(this.URL)
  }

  createTopic(title:string):Observable<Topic>{
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return this.http.post<Topic>(this.URL, { title:title,score:0 }, httpOptions);
  }
  deleteTopic (id: String) : Observable<Topic> {
    return this.http.delete<Topic>(this.URL + `/${id}`);
  }

 UpdateScore (id: String,score:Number) : Observable<Topic> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return this.http.put<Topic>(this.URL + `/${id}/${score}`, {}, httpOptions);
  }
}
