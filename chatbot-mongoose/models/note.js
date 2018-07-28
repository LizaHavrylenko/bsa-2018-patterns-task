const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: String,
  body: String,
  name: String,
  nickName: String
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
