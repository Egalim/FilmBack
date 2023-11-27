import express from "express"
import { router } from './routes/film.routes.js'

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', router)

app.listen( PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))