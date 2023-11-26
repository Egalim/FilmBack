const Router = require('express')
const router = new Router()
const filmController = require('../controller/film.controller')

router.post('/film', filmController.createFilm)
router.get('/films', filmController.getFilms)
router.get('/film/:id', filmController.getOneFilm)


module.exports = router