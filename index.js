const express = require("express");
const path = require("path");
const FileSync = require("lowdb/adapters/FileSync");
const low = require("lowdb");
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do lowDB com o FileSync
const dbFileName = "db.json";
const adapter = new FileSync(dbFileName);
const db = low(adapter);

// Inicializar o banco de dados
db.defaults({ students: [] }).write();

// Middleware para JSON
app.use(express.json());

// Servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rotas da API para Students
const studentsRoutes = require("./routes/students");
app.use("/students", studentsRoutes);

// Rota para a página de informações sobre o autor
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

// Rota para a página de documentação da API
app.get("/doc", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "doc.html"));
});

// Inicializar o servidor
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
