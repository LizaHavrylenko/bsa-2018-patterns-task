const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Note = require("../models/note");

function NoteRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Note;
}

NoteRepository.prototype = new Repository();

module.exports = new NoteRepository();
