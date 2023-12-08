import express, { json } from "express"

const app = express()

app.use(json())

app.get('/projetos', async (req, res) => {
    res.status(200).json({"msg": "rota ok"})
    /*
    try {
      const { deploymentId } = req.params;
      const response = await axios.get(`https://api.vercel.com/v5/now/deployments/${deploymentId}/preview`, {
        headers: { Authorization: 'Bearer SEU_TOKEN' },
      });
      res.json(response.data);
    } catch (error) {
      console.error(error);
      res.status(error.response?.status || 500).json({ error: 'Erro na solicitação' });
    }
    */
});
  

app.listen(8000, () => {
    console.log("Serivdor rodando")
})