import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { TwilioAPIService } from './twilioapi-service.component';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-twilioapi',
  templateUrl: './twilioapi.component.html',
  styleUrls: ['./twilioapi.component.css']
})
export class TwilioapiComponent implements OnInit {
  public calls = [];
  public conferences = [];
  constructor(private _twilioAPIService: TwilioAPIService) {}

  ngOnInit() {
    console.log("I'm here to GetData");
    this._twilioAPIService.getData()
    //.subscribe(data => this.calls=data.text(),err => console.log(err.text()));//;console.log(response);}
      .subscribe(response => {this.calls=response.calls},err => console.log(err.text())
    );
    this._twilioAPIService.getData2()
    //.subscribe(data => this.calls=data.text(),err => console.log(err.text()));//;console.log(response);}
      .subscribe(response => {this.conferences=response.conferences},err => console.log(err.text())
    );
    //console.log(this.calls[0].sid);
  }
  getData(){
  }
}
