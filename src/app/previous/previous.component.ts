import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { PreviousAPIService } from './previous-service.component';
import { CallDataService } from './calldata-service.component';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-previous',
  templateUrl: './previous.component.html',
  styleUrls: ['./previous.component.css'],
  providers: [PreviousAPIService, CallDataService]
})
export class PreviousComponent implements OnInit {
  public calls = [];
  public resp: any;
  public callsinfo = [];
  public calldefaultinfo = {
    'to_formatted':'N/A',
    'start_time':'N/A',
    'end_time':'N/A',
    'duration':'N/A',
    'status':'N/A'
  };
  constructor(
    private _previousAPIService: PreviousAPIService,
    private _callDataService: CallDataService,
  ) {}

  ngOnInit() {
    console.log("I'm here to GetData");

    this._callDataService.getData()
    //  .subscribe(response => {console.log(response.data);this.calls=response.data}
          .subscribe(response =>
            {
              this.resp=response;
              console.log(JSON.stringify(response));
              this.calls = this.resp.data;
              for ( let i of this.calls )
              {
                // console.log(i);

                this._previousAPIService.getCallInfo(i.callsid)
                //.subscribe(data => this.calls=data.text(),err => console.log(err.text()));//;console.log(response);}
                  .subscribe(response =>
                    {
                      this.callsinfo.push(response);
                      console.log(response);
                    },
                    err =>
                    {
                      this.callsinfo.push(this.calldefaultinfo);
                      console.log(err.text())
                    }
                );

              }
            },
            err => console.log(err.text())
    );
    console.log("this is data of calldata-service");
    // console.log(this.calls);


//    this._previousAPIService.getData()
    //.subscribe(data => this.calls=data.text(),err => console.log(err.text()));//;console.log(response);}
//      .subscribe(response => console.log(alls=response.calls},err => {console.log(err.text()));this.calls=response.data.jsonify()}
//    );



}
}
