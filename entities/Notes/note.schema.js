const mongoose = require('mongoose');

const Note = new mongoose.Schema({
	title: String,
	body: String,
	nickName: String,
	name: String
}, {
	versionKey: false
});

module.exports = mongoose.model('Note', Note);
