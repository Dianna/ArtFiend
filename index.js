var app = require('./server/server.js');

var server = app.listen(3020, function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log('ArtFiend listening on http://%s:%s', host, port);
});
