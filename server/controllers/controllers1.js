var mongoose = require('mongoose');
var User = mongoose.model('Login');
var Question = mongoose.model('Question');
var session = require('express-session');

module.exports = {

//create question

createQuestion: function(req, res) {
    console.log("inside formcreate");
    console.log("questioninfo3", req)
    var question = new Question(req.body);
        // {
        //     question: req.body.question,
        //     description: req.body.description,
        // }
    
    question._userId = req.body._userId
    question.creator = req.body.creator

    question.save(function (err, data) {
        console.log("questioninfo4", data)
        if(err) {
            res.json(err);
            return;
        } else {
            res.json(data);

        }
    });
},

// display all quesitons

displayQuestions: function(req, res) {
    console.log("questionsall body" ,req.body)
    Question.find({}, (err, questions) => {
        if(err){
            return res.status(401).json(err);
        } else {
            return res.json(questions);
        }
    })
},


//update one question
updateQuestion: function(req, res) {
    console.log("update", req.body);
    Question.update({_id: req.params.id}, req.body, function (err, data) {
        if (err) {
            res.json(err);
            return;
        }
        res.json(data);
    });
},

displayOneQuestion: function(req, res) {
    console.log("inside poll showone");
    Question.findOne({_id: req.params.id}, function (err, data) {
        if (err) {
            res.json(err);
            return;
        }
        res.json(data);
    });
},

//user     

getid: function(req, res) {
    console.log("inside showall");
    if(req.session.user) {
        return res.json(req.session.user);
    }else{
        return res.status(500).json("Not logged in")
    }
},

//created logging 

create: function (req, res) {
    User.findOne({name: req.body.name}, (err, user) => {
        if(err) {
            return res.status(401).json(err)
        }
        else if(user) {
            console.log("helow", user)
            req.session.user = user
            // console.log("session",req.session.user)
            res.json({user})
        }
        else {
            let user = new User(req.body);
            console.log("hello2", user)
            user.save((err) => {
                if(err){
                    return res.status(401).json(err);
                }
                else{
                    console.log(`${user} has been saved`)
                    req.session.user = user;
                    console.log("session",req.session.user)
                    res.json({user});
                }
            })
        }
    })
},

//log out
logout: function (req, res) {
    req.session.destroy()
    return res.json('bye bye');
}
// Logout clears our session

}