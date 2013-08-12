module.exports = function(app) {
  var ContactController = {
    index: function(request, response) {
      var user = request.session.user
        , contacts = user.contacts
        , params = {user: user, contacts: contacts};
      response.render('contacts/index', params);
    },

    create: function(request, response) {
      var contact = request.body.contact
        , user = request.session.user;
      user.contacts.push(contact);
      response.redirect('/contacts');
    },

    show: function(request, response) {
      var id = request.params.id
        , contact = request.session.user.contact[id]
        , params = {contact: contact, id: id};
      response.render('contacts/show', params);
    },

    edit: function(request, response) {
      var id = request.params.id
        , user = request.session.user
        , contact = user.contacts[id]
        , params = {user: user, contact: contact, id: id};
      response.render('contacts/edit', params);
    },

    update: function(request, response) {
      var contact = request.body.contact
        , user = request.session.user;
      user.contacts[request.params.id] = contact;
      response.redirect('/contacts');
    },

    destroy: function(request, response) {
      var user = request.session.user
        , id = request.params.id;
      user.contacts.splice(id, 1);
      response.redirect('/contacts');
    }
  }
  return ContactController;
};
