const Repository = require('./../../common/Repository');
const NoteModel = require('./note.schema');

class NoteRepository extends Repository {
	constructor() {
		super();
		this.model = NoteModel;
	}
}

module.exports = new NoteRepository();
