import {db} from '../db.js'

class FilmController {
    async createFilm(req, res) {
        const { name_film, description, img } = req.body
        const newFilm = await db.query('insert into public."Film" (name_film, description, img) values ($1,$2,$3) returning *', [name_film, description, img])
        res.json(newFilm.rows[0])
    }
    async getFilms(req, res) {
        const films = await db.query('SELECT * from public."Film" ')
        res.json(films.rows)
    }
    async getOneFilm(req, res) {
        const film_id = req.params.id;
        const film = await db.query(`SELECT * FROM public."Film" where film_id = ${film_id}`)
        res.json(film.rows[0])
    }
}

export const filmController = new FilmController()