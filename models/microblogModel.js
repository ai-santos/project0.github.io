var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var microblogSchema = new Schema({
        blog: String,
        comment: String
});

var Microblog = mongoose.model('Microblog', microblogSchema);

module.exports = Microblog;