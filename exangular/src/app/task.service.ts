import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; // <— Imported
import 'rxjs/add/operator/map';


@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  session;
  loggedUser = null;
   // dashboad logout 
   logout() {
    return this._http.get('/login/logout')
    .map((response: Response) => response.json())
    .toPromise();
}

// login page created
  createNote(user, callback) {
    this.loggedUser = user.name;
    console.log("user",user)
    return this._http.post('/login', user).subscribe(
      (response) => {
        console.log("login sent to response", response);
        this.session = response
        callback()
      },
      (error) => {
        console.log("could not login", error);
      }
    );
  }

//get the user names 
  retrieveid(callback) {
    this._http.get('/login/one').subscribe(
      (response) => {
        callback(response.json());      
      },
      (error) => {
        console.log("could not retrive all data", error)
      }
    );
  }

  //question
  polls;
  questions;
  name;

  createquestion(questioninfo, callback, errorback) {
    console.log("questioninfo1", questioninfo)
    this._http.post('/questions', questioninfo).subscribe(
      (response) => {
        callback(response.json());       
      },
      (error) => {
        errorback();
        console.log("could not display question", error)
      }
    );
  }

  displayQuestions(callback) {
    console.log("1234")
    this._http.get('/questions').subscribe(
      (response) => {
        callback(response.json());      
      },
      (error) => {
        console.log("could not display quesitons", error)
      }
    );
  }

  displayOneQuestion(id, callback) {
    console.log("1234")
    this._http.get(`/question/${id}`).subscribe(
      (response) => {
        console.log("display one question", response)
        callback(response.json());      
      },
      (error) => {
        console.log("could not display one quesiton", error)
      }
    );
  }

  updateQuestion(id, new_question, callback){
    this._http.put(`/questions/${id}`, new_question).subscribe( 
      (response) => {
        callback(response.json());
        console.log("got in here");
       },
      (error) => { 
        console.log(error);
       } 
    );
  }

  createAnswer(answerinfo, callback, errorback) {
    console.log("questioninfo1", answerinfo)
    this._http.post('/answer', answerinfo).subscribe(
      (response) => {
        callback(response.json());       
      },
      (error) => {
        errorback();
        console.log("could not display answer", error)
      }
    );
  }

  displayAllAnswers(id, callback) {
    console.log("get answers",id);
    this._http.get(`/answers/${id}`).subscribe(
      (response) => {
        callback(response.json());       
      },
      (error) => {
        console.log("could not display all answers", error)
      }
    );
  }

  updateAnswer(id, updatedQuestion) {
    this._http.put(`/answer/${id}`, updatedQuestion).subscribe(
      (response) => {
        console.log("updated", response);
      },
      (error) => {
        console.log("could not update answers", error);
      }
    )
  }

}

