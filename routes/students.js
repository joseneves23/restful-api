const express = require("express");
const router = express.Router();
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

// Configuração do lowDB
const dbFileName = "db.json";
const adapter = new FileSync(dbFileName);
const db = low(adapter);

// Rota para listar todos os estudantes
router.get("/", (req, res) => {
  res.json(db.get("students").value());
});

// Rota para adicionar um novo estudante
router.post("/", (req, res) => {
  const { id, name, age, course, year } = req.body;
  const newStudent = { id, name, age, course, year };
  db.get("students").push(newStudent).write();
  res.status(201).json(newStudent);
});

// Rota para atualizar um estudante pelo ID
router.put("/:id", (req, res) => {
  const studentId = req.params.id;
  const student = db.get("students").find({ id: studentId }).value();

  if (student) {
    db.get("students").find({ id: studentId }).assign(req.body).write();
    res.json(db.get("students").find({ id: studentId }).value());
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// Rota para eliminar um estudante pelo ID
router.delete("/:id", (req, res) => {
  const studentId = req.params.id;
  const student = db.get("students").find({ id: studentId }).value();

  if (student) {
    db.get("students").remove({ id: studentId }).write();
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// Rota para obter um estudante específico pelo ID
router.get("/:id", (req, res) => {
  const studentId = req.params.id;
  const student = db.get("students").find({ id: studentId }).value();

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

module.exports = router;
