import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient){
    this.getTasks();
  }

  getTasks(){
    let tempObservable = this._http.get('/api/tasks');
    tempObservable.subscribe(data => console.log("Got tasks", data))
  }

}
