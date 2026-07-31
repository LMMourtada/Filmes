const express = require('express')
const app = express() 
const cors = require('cors');
const db = require('./database');
const port = 3000


app.use(express.json());
app.use(cors());


// Criar favorito
app.post('/favoritos', async (req, res) => {

  const filme = req.body;

  try {
    await db.query(
      `
      INSERT INTO favoritos (id, title, poster_path)
      VALUES ($1, $2, $3)
      `,
      [
        filme.id,
        filme.title,
        filme.poster_path
      ]
    );

    res.json({ mensagem: "Favorito salvo" });

  } catch (error) {
    res.status(500).json(error);
  }
});


// Listar favoritos
app.get("/favoritos", async (req, res) => {

  try {

    const resultado = await db.query(
      "SELECT * FROM favoritos"
    );

    res.json(resultado.rows);

  } catch(error) {
    res.status(500).json(error);
  }

});


// Buscar favorito por id
app.get("/favoritos/:id", async (req, res) => {

  try {

    const resultado = await db.query(
      "SELECT * FROM favoritos WHERE id = $1",
      [req.params.id]
    );

    res.json(resultado.rows[0]);

  } catch(error) {
    res.status(500).json(error);
  }

});


// Remover favorito
app.delete('/favoritos/:id', async (req, res) => {

  try {

    await db.query(
      "DELETE FROM favoritos WHERE id = $1",
      [req.params.id]
    );

    res.json({ mensagem: "Favorito removido" });

  } catch(error) {
    res.status(500).json(error);
  }

});


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});