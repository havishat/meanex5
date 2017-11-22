import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { TaskService } from './task.service';
import { HttpModule } from '@angular/http'; // <— Import
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewquestionComponent } from './newquestion/newquestion.component';
import { PollvoteComponent } from './pollvote/pollvote.component';
import { NewanswerComponent } from './newanswer/newanswer.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NewquestionComponent,
    PollvoteComponent,
    NewanswerComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
