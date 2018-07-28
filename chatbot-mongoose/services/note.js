const NoteRepository = require("../repositories/NoteRepository");

module.exports = {

  addOne: (note, callback) => {
    NoteRepository.addOne(note,(err, data) => {
      callback(err, data);
    });
  },

  findAll: (credentials, callback) => {
    NoteRepository.getAll(credentials, (err, data) => {
      callback(err, data);
    });
  },

  findOne: (title, credentials, callback) => {
    NoteRepository.getByTitle(title, credentials, (err, data) => {
      callback(err, data);
    });
  },

  deleteOne: (title, credentials, callback) => {
    NoteRepository.deleteByTitle(title, credentials, (err, data) => {
      callback(err, data);
    });
  }
};
