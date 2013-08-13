module.exports = function(app) {
  var contacts = app.controllers.contacts;
  app.get('/contacts', contacts.index);
  app.get('/contacts/:id', contacts.show);
  app.post('/contact', contacts.create);
  app.get('/contacts/:id/editar', contacts.edit);
  app.put('/contacts/:id', contacts.update);
  app.del('/contacts/:id', contacts.destroy);
};
