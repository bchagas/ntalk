module.exports = function(app) {
  var ChatController = {
    index: function(request, response){
      var result = {email: request.params.email,
        user: request.session.user};
      response.render('chat/index', result);
    } };
  return ChatController;
};
