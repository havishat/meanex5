import { Component, OnInit } from '@angular/core';
import { TaskService} from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newanswer',
  templateUrl: './newanswer.component.html',
  styleUrls: ['./newanswer.component.css']
})
export class NewanswerComponent implements OnInit {

  constructor(private task: TaskService, private _router: Router, private _route: ActivatedRoute) { 
    this._route.paramMap.subscribe( params => {
      this.questionID = params.get('id');
      console.log("id", this.questionID);
    })
  }

  loggeduser;
  question;
  questionID;

  newanswer = {
   name: '',
   answer: '',
   details: '',
   likes: 0,
   _questionID: ''
 }
  ngOnInit() {
    // this.retrieveid();
    this.displayAnswer();
   
  }



createAnswer() {
  this.newanswer.name = this.loggeduser;
  console.log("name1", this.newanswer.name )
  this.newanswer._questionID = this.questionID;
  console.log("newanswer", this.newanswer)
  this.task.createAnswer(this.newanswer, (res) => { //callback is here
    this.newanswer.name = this.loggeduser;
    console.log("name2", this.newanswer.name )
    this.question._answers.push(res);
    this.task.updateQuestion(this.questionID, this.question, callback => {
      this._router.navigate(['/']);
    })
    console.log("newnewanswerinfo2",res);
  },() => { //errorback function this is the second parameter of retrieveTasks
    console.log("error something");
  });
 
}

displayAnswer() {
this.loggeduser = this.task.loggedUser;
this.task.displayOneQuestion(this.questionID, oneQuestion => {
  this.question = oneQuestion;
  console.log("question", this.question)
})

}

logout() {
  this.task.logout()
  .then(data => this._router.navigateByUrl('/'))
  .catch(err => console.warn(err));
}

goBackQuestion() {
  this._router.navigate(['/pollvote/'+this.questionID]);
}

}
