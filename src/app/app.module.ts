import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';

import { AppComponent } from './app.component';
import { TwilioapiComponent } from './twilioapi/twilioapi.component';

import { UpcomingComponent } from './upcoming/upcoming.component';
import { PreviousComponent } from './previous/previous.component';
import { ConsultingComponent } from './consulting/consulting.component';


@NgModule({
  declarations: [
    AppComponent,
    TwilioapiComponent,
    UpcomingComponent,
    PreviousComponent,
    ConsultingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
