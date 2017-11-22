import { Component, OnInit } from '@angular/core';
import { TaskService} from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pollvote',
  templateUrl: './pollvote.component.html',
  styleUrls: ['./pollvote.component.css']
})
export class PollvoteComponent implements OnInit {

  loggeduser;
  answers;
  question;
  questionID;
 

  constructor(private task: TaskService, private _router: Router, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe( params => {
      this.questionID = params.get('id');
      console.log("id", this.questionID);
    })
   }


  ngOnInit() {
    this.display();
  }

  display() {
  this.loggeduser = this.task.loggedUser;
  console.log("creator", this.loggeduser)
  this.task.displayOneQuestion(this.questionID, (question) => {
    this.question = question;
    console.log("get this one question", this.question)
  })
  this.task.displayAllAnswers(this.questionID, answers => {
    this.answers = answers;
    console.log("get all its answers", this.answers);
  })

}

  like(id, answer){
    answer.likes += 1;
    this.task.updateAnswer(id, answer)
  }

  answerThisQuestion() {
    this._router.navigate(['/new_answer/'+this.questionID]);
    
  }

  logout() {
    this.task.logout()
    .then(data => this._router.navigateByUrl('/'))
    .catch(err => console.warn(err));
  }
}
