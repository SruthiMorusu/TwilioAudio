import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TwilioapiComponent } from './twilioapi/twilioapi.component';
import { ConsultingComponent } from './consulting/consulting.component';

import { PreviousComponent } from './previous/previous.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  { path: '', component: TwilioapiComponent},
  { path: 'consulting', component: ConsultingComponent},
  { path: 'upcoming', component: UpcomingComponent},
  { path: 'previous', component: PreviousComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
