import { Component, OnInit } from '@angular/core';
import { TaskService} from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private task: TaskService, private _router: Router) { }

  private name: String;
  private questions = [];
  // private deletedPollID;
  // private displaypolls: Array<any>;
  private input = {
      key: ''
  };

  ngOnInit() {
    // if(this.task.session == null){
    //   this._router.navigateByUrl('/')
    // }
    this.retrieveid();
    this.displayQuestions();
  }
//user name
  retrieveid() {
    this.task.retrieveid((data) => {
      this.name = data.name;
  })
}

//logout
logout() {
  this.task.logout()
  .then(data => this._router.navigateByUrl('/'))
  .catch(err => console.warn(err));
}

//display all questions
displayQuestions() {
  this.task.displayQuestions((data) => {
    // console.log("data",data)
    this.questions = data
    console.log("questions", this.questions)
  });
}

//navigate to one question page for vote likes 
show(id) {
  this._router.navigate(['/pollvote/'+id]);
}

//navigate to one answer
answer(id) {
  this._router.navigate(['/new_answer/'+id]);
}

}
