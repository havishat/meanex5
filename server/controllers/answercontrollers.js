var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');

module.exports = {
createAnswer: function (req, res) {
    var answer = new Answer(req.body);
    answer.save(function (err, answer) {
        if(err) {
            res.json (err);
            return;
        }
        res.json(answer);
    });
    return;
        
},
oneQuestionAnswers: function (req, res) {
    console.log("got to itsanswers");
    Answer.find({_questionID: req.params.id}, function (err, data) {
        if (err) {
            console.log("could not retrive data");
            res.json(err);
            return;
        }
        res.json(data);
    });
},

updateAnswer: function(req, res) {
    console.log("update Answer", req.body);
    Answer.update({_id: req.params.id}, req.body, function (err, data) {
        if (err) {
            res.json(err);
            return;
        }
        res.json(data);
    });
},

}