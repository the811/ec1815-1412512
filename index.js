var express = require('express')
var path = require("path")
var favicon = require('serve-favicon')
const helmet = require('helmet')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.use(favicon(path.join(__dirname + '/public/images/favicon.png')))
// Sets "X-XSS-Protection: 1; mode=block" on all versions of IE
app.use(helmet.xssFilter({ setOnOldIE: true }))

app.get('/', function(request, response) {
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
