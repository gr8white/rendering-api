/*
*  Write a server that will respond with the appropriate JSON blob
*  for the given rendering
*/
var express = require('express')
var app = express()
var albums = require('./abstractions/albums.js')
var circles = require('./abstractions/circles.js')
var movies = require('./abstractions/movies.js')
var nameTags = require('./abstractions/nameTags.js')
var poker = require('./abstractions/poker.js')
var rectangle = require('./abstractions/rectangle.js')
var restaurants = require('./abstractions/restaurants.js')
var students = require('./abstractions/students.js')
var surveys = require('./abstractions/surveys.js')
var tweets = require('./abstractions/tweets.js')

app.use(express.static(__dirname + '/public'))

// GET /api/albums
app.get('/api/albums', function (req, res, nextFn) {
  console.log('albums')
  res.send(albums)
})

// GET /api/circles
app.get('/api/circles', function (req, res, nextFn) {
  console.log('circles')
  res.send(circles)
})

// GET /api/movies
app.get('/api/movies', function (req, res, nextFn) {
  console.log('movies')
  res.send(movies)
})

// GET /api/nametags
app.get('/api/nametags', function (req, res, nextFn) {
  console.log('nametags')
  res.send(nameTags)
})

// GET /api/poker
app.get('/api/poker', function (req, res, nextFn) {
  console.log('poker')
  res.send(poker)
})

// GET /api/rectangle
app.get('/api/rectangle', function (req, res, nextFn) {
  console.log('rectangle')
  res.send(rectangle)
})

// GET /api/restaurants
app.get('/api/restaurants', function (req, res, nextFn) {
  console.log('restaurants')
  res.send(restaurants)
})

// GET /api/students
app.get('/api/students', function (req, res, nextFn) {
  console.log('students')
  res.send(students)
})

// GET /api/surveys
app.get('/api/surveys', function (req, res, nextFn) {
  console.log('surveys')
  res.send(surveys)
})

// GET /api/tweets
app.get('/api/tweets', function (req, res, nextFn) {
  console.log('tweets')
  res.send(tweets)
})

app.listen(3000, function () {
  console.log('rendering-api is now listening on port 3000...')
})
