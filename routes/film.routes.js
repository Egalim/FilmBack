import { Router } from 'express'

export const router = new Router()
import {filmController} from '../controller/film.controller.js'

router.post('/film', filmController.createFilm)
router.get('/films', filmController.getFilms)
router.get('/film/:id', filmController.getOneFilm)
