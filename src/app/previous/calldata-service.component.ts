import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CallDataService{
  private _url: string = "http://localhost:3000/api/consultations"
  constructor(private _http: Http){}
  getData(){
    return this._http.get(this._url)
     .map((response:Response) => response.json());
  }
}
