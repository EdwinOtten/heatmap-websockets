var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 5001;

// Make static assets publicly available
app.use(express.static(__dirname + '/assets'));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket) {
  console.log('a user connected!!! :D');

  socket.on('disconnect', function() {
    console.log('a user disconnected :(');
  });

});

http.listen(port, function(){
  console.log('listening on *:'+port);
});


function wait1sec(){
    setTimeout(function(){
        checkCall(wait1sec);
    }, 200);
}



function checkCall(callback) {
  var data = getData();
  io.emit('heatmap data', {data:data} );
  callback();
}

wait1sec();


var data1 = [
        {lat: 52.087677, lng: 5.076754, count: 3},
        {lat: 52.393773, lng: 4.862520, count: 5},
        {lat: 51.559313, lng: 5.086832, count: 1},
        {lat: 53.206953, lng: 6.550572, count: 2},
      ];
var data2 = [
        {lat: 52.087677, lng: 5.076754, count: 2},
        {lat: 52.393773, lng: 4.862520, count: 4},
        {lat: 51.559313, lng: 5.086832, count: 3},
        {lat: 53.206953, lng: 6.550572, count: 2},
      ];
var data3 = [
        {lat: 52.087677, lng: 5.076754, count: 2},
        {lat: 52.393773, lng: 4.862520, count: 3},
        {lat: 51.559313, lng: 5.086832, count: 5},
        {lat: 53.206953, lng: 6.550572, count: 3},
      ];
var data4 = [
        {lat: 52.087677, lng: 5.076754, count: 1},
        {lat: 52.393773, lng: 4.862520, count: 2},
        {lat: 51.559313, lng: 5.086832, count: 7},
        {lat: 53.206953, lng: 6.550572, count: 4},
      ];
var data5 = [
        {lat: 52.087677, lng: 5.076754, count: 2},
        {lat: 52.393773, lng: 4.862520, count: 4},
        {lat: 51.559313, lng: 5.086832, count: 4},
        {lat: 53.206953, lng: 6.550572, count: 3},
      ];

var i = 0;
function getData() {
  i++;
  switch(i) {
    case 1:
      return data1;
      break;
    case 2:
      return data2;
      break;
    case 3:
      return data3;
      break;
    case 4:
      return data4;
      break;
    case 5:
      i = 0;
      return data5;
      break;
  }
}
