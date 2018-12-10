var express = require('express')
var path = require("path")
var favicon = require('serve-favicon')
var app = express()
const helmet = require('helmet')
const sixtyDaysInSeconds = 5184000

<<<<<<< HEAD:express-backend/index.js
// Serve our api route /cow that returns a custom talking text cow
app.get('/api/cow/:say', cors(), async (req, res, next) => {
  try {
    const text = req.params.say
    const moo = cowsay.say({ text })
    res.json({ moo })
  } catch (err) {
    next(err)
  }
})
// Serve our base route that returns a Hello World cow
app.get('/api/cow/', cors(), async (req, res, next) => {
  try {
    const moo = cowsay.say({ text: 'Hello World!' })
    res.json({ moo })
  } catch (err) {
    next(err)
  }
})
// Choose the port and start the server
//const PORT = process.env.PORT || 5000
const PORT = 5000
app.listen(PORT, () => {
  console.log(`Mixing it up on port ${PORT}`)
=======
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))
app.use(favicon(path.join(__dirname + '/public/images/favicon.png')))
// Http security headers
app.disable('x-powered-by')
app.use(helmet.xssFilter())	// Sets "X-XSS-Protection: 1; mode=block"
app.use(helmet.hsts({ maxAge: sixtyDaysInSeconds }))	// Sets "Strict-Transport-Security" header
app.use(helmet.noCache())	// Set header Cache-Control and Pragma to turn-off client-side caching
app.use(helmet.noSniff())	// Sets "X-Content-Type-Options: nosniff"
app.use(helmet.frameguard({ action: 'sameorigin' }))	// Sets "X-Frame-Options: SAMEORIGIN"

app.get('/', function(request, response) {
  res.sendFile(path.join(__dirname + '/public/index.html'))
>>>>>>> parent of 7a3d330... Test react-frontend express-backend:index.js
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
