function Repository() {}

Repository.prototype.getAll = getAll;
Repository.prototype.getByTitle = getByTitle;
Repository.prototype.deleteByTitle = deleteByTitle;
Repository.prototype.addOne = addOne;

function addOne(data, callback) {
  var model = this.model;
  var query = model.create(data);
  query.then(callback);
}

function getAll(credentials, callback) {
  var model = this.model;
  var query = model.find({ 
    name: credentials.name,
    nickName: credentials.nickName
  });
  query.exec(callback);
}

function getByTitle(title, credentials, callback) {
  var model = this.model;
  var query = model.findOne({
    title: title,
    name: credentials.name,
    nickName: credentials.nickName
  });
  query.exec(callback);
}

function deleteByTitle(title, credentials, callback) {
  var model = this.model;
  var query = model.deleteOne({
    title: title,
    name: credentials.name,
    nickName: credentials.nickName
  });
  query.exec(callback);
}
 

module.exports = Repository;
