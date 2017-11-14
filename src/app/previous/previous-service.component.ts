import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PreviousAPIService{
  private _url: string = "https://api.twilio.com/2010-04-01/Accounts/AC90af690f43f41d70e0026dd87a6e3640/Calls.json"//?From=%2B15512482443
  private _url2: string = "https://api.twilio.com/2010-04-01/Accounts/AC90af690f43f41d70e0026dd87a6e3640/Conferences.json";
  private callidurl = "https://api.twilio.com/2010-04-01/Accounts/AC90af690f43f41d70e0026dd87a6e3640/Calls/";// CA84eca10d601bfd6fb605bcc42cd2b4bf.json
  constructor(private _http: Http){}
  getData(){
    let headers = new Headers();
    let username: string = 'AC90af690f43f41d70e0026dd87a6e3640';
    let password: string = 'xxxxxxxxxx';
    //let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Content-Type", "application/json");
    return this._http.get(this._url, {headers: headers})
     .map((response:Response) => response.json());
  }
  getData2(){
    let headers = new Headers();
    let username: string = 'AC90af690f43f41d70e0026dd87a6e3640';
    let password: string = 'xxxxxxx';
    //let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Content-Type", "application/json");
    return this._http.get(this._url2, {headers: headers})
      .map((response:Response) => response.json());
  }
  getCallInfo(callsid: string){
    let headers = new Headers();
    let username: string = 'AC90af690f43f41d70e0026dd87a6e3640';
    let password: string = 'xxxxxxx';
    //let headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Content-Type", "application/json");
    let url = this.callidurl;
    url = url.concat(callsid);
    url = url.concat(".json");
    console.log(url);
    return this._http.get(url, {headers: headers})
      .map((response:Response) => response.json());
  }
}
