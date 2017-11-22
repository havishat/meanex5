import { Component, OnInit } from '@angular/core';
import { TaskService} from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newquestion',
  templateUrl: './newquestion.component.html',
  styleUrls: ['./newquestion.component.css']
})
export class NewquestionComponent implements OnInit {

 
  constructor( private task: TaskService, private _router: Router) { }
  
    private name: String;
    newquestion = {
     question: '',
     description: '',
     _userId: '',
     creator: '',
   }
  
    ngOnInit() {
      // if(this.task.session == null){
      //   this._router.navigateByUrl('/')
      // }
      this.retrieveid();
    }
  
  
  
    retrieveid() {
      this.task.retrieveid((data) => {
        this.name = data.name;
    })
  }
  
    createQuestion() {
      this.newquestion.creator = this.task.session.name;
      this.newquestion._userId =  this.task.session._id
      console.log("newQuestion", this.newquestion)
      this._router.navigate(["/dashboard"])
      this.task.createquestion(this.newquestion, (res) => { //callback is here
        console.log("newQuestioninfo2",res);
      },() => { //errorback function this is the second parameter of retrieveTasks
        console.log("error something");
      });
     
    }
  
    logout() {
      this.task.logout()
      .then(data => this._router.navigateByUrl('/'))
      .catch(err => console.warn(err));
    }
  
  }
  