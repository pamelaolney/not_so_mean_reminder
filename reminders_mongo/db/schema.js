var mongoose  = require('mongoose')

var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var ReminderSchema = new Schema({
  body: String
})

var AuthorSchema   = new Schema({
  name: String,
  reminders: [ReminderSchema]
})

mongoose.model("Author", AuthorSchema)
mongoose.model("Reminder", ReminderSchema)
