var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
    answer: {type: String,  required: [true, "Please enter answer."], minlength: 5},
    details: {type: String},likes: {type: Number, required: true, default: 0},
    _questionID: { type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
}, {timestamps:true});

mongoose.model('Answer', AnswerSchema);