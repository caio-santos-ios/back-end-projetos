import axios from "axios"
import "dotenv/config"
import express, { json } from "express"
import { dataBaseSourse, projectRepository } from "./db"

const app = express()

app.use(json())

app.post('/projetos', async (req, res) => {
    let arr;
    try {
        const response = await axios.get(`https://api.github.com/users/caio-santos-ios/repos`)
        arr = response.data
    } catch (error: any) {
        console.error(error);
        res.status(error.response?.status || 500).json({ error: 'Erro na solicitação' });
    }

    arr.map(async (el: any) => {
        const project = projectRepository.create({
            id: el.id,
            name: el.name,
            link: el.homepage,
            photo: '',
            description: el.description,
            repository: el.html_url
        })

        await projectRepository.save(project)
        
    })
    
    res.json()
})

app.get('/projetos', async (req, res) => {
    const projects = await projectRepository.find()
    res.json(projects)
})

dataBaseSourse.initialize()
.then(() => {
    app.listen(8000, () => console.log("Serivdor rodando"))
    console.log("Database connect")
})
.catch((err) => console.log(err))