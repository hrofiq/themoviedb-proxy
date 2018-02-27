var express = require('express')
var router = express.Router()
var axios = require('axios')
var isInteger = Number.isInteger

var instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
})

const api_key = process.env.APIKEY

router.get('/most-popular', async function(req, res, next) {
  var url = '/discover/movie?sort_by=popularity.desc' + '&api_key=' + api_key
  var response = await instance.get(url)
  res.send(response.data)
})

router.get('/genres', async function(req, res, next) {
  var url = '/genre/movie/list' + '?api_key=' + api_key
  var response = await instance.get(url)
  res.send(response.data)
})

router.get('/genre/:genre', async function(req, res, next) {
  var genre = req.params.genre
  if(isInteger(parseInt(genre, 10))) {
    var url = '/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&with_genres='+ genre + '&api_key=' + api_key
    var response = await instance.get(url)
    res.send(response.data)
  } else {
    res.send('Sorry, you might input wrong parameter. Please use /genres to see available genres.')
  }
})

router.get('/year/:year', async function(req, res, next) {
  var year = req.params.year
  if (isInteger(parseInt(year, 10)) & year.length === 4) {
    var url = '/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year='+ year + '&api_key=' + api_key
    var response = await instance.get(url)
    res.send(response.data)
  } else {
    res.send('You might input the wrong parameter')
  }
})

router.get('/credit/:movie_id', async function(req, res, next) {
  movie_id = req.params.movie_id
  if(isInteger(parseInt(movie_id, 10))) {
    var url = '/movie/'+ movie_id + '/credits'+ '?api_key=' + api_key
    var response = await instance.get(url)
    res.send(response.data)
  } else {
    res.send('You might input the wrong parameter')
  }
})

router.get('/person/:person_name', async function(req, res, next){
  person_name = req.params.person_name
  var url = '/search/person?query=' + person_name + '&api_key=' + api_key
  var get_id = await instance.get(url)
  var person_id = get_id.data.results[0].id
  
  var url2 = /person/ + person_id + '?api_key=' + api_key
  instance.get(url2).then(x => res.send(x.data))
})

module.exports = router;