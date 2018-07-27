const noteRepository = require('./note.repository');

class NoteService {
	getAllNotes(name, nickName) {
		return noteRepository.findAll(name, nickName);
	}

	getNoteByTitle(title) {
		return noteRepository.findByTitle(title);
	}

	addNote(note) {
		return noteRepository.add(note);
	}


	deleteNote(title) {
		return noteRepository.delete({ title: title });
	}
}

module.exports = new NoteService();