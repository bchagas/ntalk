exports.notFound = function(request, response, next) {
  response.status(404);
  response.render('404');
};
