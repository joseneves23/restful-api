const express = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do lowDB com o FileSync
const dbFileName = "db.json";
const adapter = new FileSync(dbFileName);
const db = low(adapter);

// Inicializar o banco de dados
db.defaults({ students: [] }).write();

// Middlewares para JSON
app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static("public"));

// Rotas da API para Students
const studentsRoutes = require("./routes/students");
app.use("/students", studentsRoutes);

// Rota para a página de informações sobre os autores
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

// Rota para a página de documentação da API
app.get("/doc", (req, res) => {
  res.sendFile(__dirname + "/public/doc.html");
});

// Inicializar o servidor
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
