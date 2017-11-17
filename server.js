// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var events = [
  {
    name: "test",
    month: 10,
    date: 17,
    startTime: 12,
    endTime: 16
  },
  {
    name: "November Maker Day",
    month: 10,
    date: 18,
    startTime: 12,
    endTime: 16  
  },
  {
    name: "December Maker Night",
    month: 11,
    date: 13,
    startTime: 16,
    endTime: 18 
  },
  {
    name: "January Maker Night",
    month: 11,
    date: 13,
    startTime: 16,
    endTime: 18 
  }
]

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/event.html');
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
