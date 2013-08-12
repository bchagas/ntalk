module.exports = function(app) {
  var User = app.models.user;

  var HomeController = {
    index: function(request, response) {
      response.render('home/index');
    },

    login: function(request, response){
      var email = request.body.email
        , name = request.body.name;
      if(email && name) {
        var user = new User(name, email);
        request.session.user = user;
        response.redirect('/contacts');
      } else {
        response.redirect('/');
      }
    },

    logout: function(request, response) {
      request.session.destroy();
      response.redirect('/');
    }
  };
  return HomeController;
};
