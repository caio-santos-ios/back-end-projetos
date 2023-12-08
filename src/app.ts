import axios from "axios"
import "dotenv/config"
import express, { json } from "express"
import { dataBaseSourse, projectRepository } from "./db"
import cors from "cors"

const app = express()

app.use(json())
app.use(cors())

app.get('/projetos', async (req, res) => {
    const projects = await projectRepository.find()
    res.json(projects)
})

dataBaseSourse.initialize()
.then(() => app.listen(8000))
.catch((err) => console.log(err))