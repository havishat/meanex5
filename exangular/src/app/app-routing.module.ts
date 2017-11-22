import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NewquestionComponent} from './newquestion/newquestion.component';
import {PollvoteComponent} from './pollvote/pollvote.component';
import {NewanswerComponent} from './newanswer/newanswer.component';


const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  component: LoginComponent,
},
{
  path: 'dashboard',
  component: DashboardComponent,
},
{
  path: 'newquestion',
  component: NewquestionComponent,
},
{
  path: 'new_answer/:id',
  component: NewanswerComponent,
},

{
  path: 'pollvote/:id',
  component: PollvoteComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
