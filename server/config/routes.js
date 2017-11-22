var controller1 = require('../controllers/controllers1.js');
var answercontrollers = require('../controllers/answercontrollers.js');
//var polls = require('../controllers/polls.js');
var path = require('path');

module.exports = function(app) {

    // This is the method we can use to grab the user's
	// name from the database after it is stored in session
	// by initial login
    app.get('/login/one', controller1.getid);

    //logs the user in or creates user
    app.post('/login', controller1.create);

    app.get('/login/logout', controller1.logout);
    // Logs the user out by clearing session

    app.post('/questions', controller1.createQuestion);
    // Create a new question in the database
    app.get('/questions', controller1.displayQuestions);
    // display all questions from the database
    
    app.put('/questions/:id', controller1.updateQuestion);
    //update the question

    app.get('/question/:id', controller1.displayOneQuestion);
    // display one question from the database

    app.post('/answer', answercontrollers.createAnswer);
    // Create a new answer in the database
    app.put('/answer/:id', answercontrollers.updateAnswer);
    app.get('/answers/:id', answercontrollers.oneQuestionAnswers);

}