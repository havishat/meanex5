var mongoose = require('mongoose');

var Schema = mongoose.Schema

var LoginSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Please enter a name."], minlength: 3},
    _questionId: [{type: Schema.Types.ObjectId, ref:"Question"}]
}, {timestamps:true});

mongoose.model('Login', LoginSchema)
;

var QuestionSchema = new mongoose.Schema({
    question: {type: String,  required: [true, "Please enter quesiton."], minlength: 10},
    description: {type: String},
    _userId: {type: Schema.Types.ObjectId, ref:"Question"},
    creator: {type: Schema.Types.String, ref: "Question"},
    _answers: [ {type: Schema.Types.ObjectId, ref: 'Answer',
    }],

}, {timestamps:true});

mongoose.model('Question', QuestionSchema);