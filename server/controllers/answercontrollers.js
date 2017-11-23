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
    Answer.find({_questionID: req.params.id}, function (err, answer) {
        if (err) {
            res.json(err);
            return;
        }
        res.json(answer);
    });
},

updateAnswer: function(req, res) {
    Answer.update({_id: req.params.id}, req.body, function (err, answer) {
        if (err) {
            res.json(err);
            return;
        }
        res.json(answer);
    });
},

}
