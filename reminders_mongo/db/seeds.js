var mongoose = require('mongoose')
// connects us to the reminders database in mongo
var conn = mongoose.connect('mongodb://localhost/reminders')
// require our model definitions we defined earlier
var AuthorModel = require("../models/author")
var ReminderModel = require("../models/reminder")
// removes any existing authors and reminders from our database
AuthorModel.remove({}, function(err){
})
ReminderModel.remove({}, function(err){
})

// instantiates 3 authors and 6 reminders in memory(but not saved yet) and
// shoves them into arrays
var bob = new AuthorModel({name: "bob"})
var susy = new AuthorModel({name: "charlie"})
var tom = new AuthorModel({name: "tom"})

var reminder1 = new ReminderModel({body: "reminder1!!"})
var reminder2 = new ReminderModel({body: "reminder2!!"})
var reminder3 = new ReminderModel({body: "reminder3!!"})
var reminder4 = new ReminderModel({body: "reminder4!!"})
var reminder5 = new ReminderModel({body: "reminder5!!"})
var reminder6 = new ReminderModel({body: "reminder6!!"})

var authors = [bob, susy, tom]
var reminders = [reminder1, reminder2, reminder3, reminder4, reminder5, reminder6]

for(var i = 0; i < authors.length; i++){
  authors[i].reminders.push(reminders[i], reminders[i+3])
  authors[i].save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("author was saved")
    }
  })
}
