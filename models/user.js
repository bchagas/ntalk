module.exports = function(app) {
  var User = function(name, email){
    this.name = name;
    this.email = email;
    this.contacts = [];
};
  return User;
};
