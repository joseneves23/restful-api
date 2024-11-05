// script.js
const apiUrl = "http://localhost:3000/students";

// Função para buscar e listar os students
async function fetchStudents() {
  const response = await fetch(apiUrl);
  const students = await response.json();
  const studentsDiv = document.getElementById("students");
  studentsDiv.innerHTML = "";

  students.forEach((student) => {
    const div = document.createElement("div");
    div.className = "student-item";
    div.innerHTML = `
          <strong>${student.name}</strong> (Id: ${student.id}, Idade: ${student.age}, Curso: ${student.course}, Ano: ${student.year})
          <button onclick="deleteStudent('${student.id}')">Delete</button>
          <button onclick="showUpdateForm('${student.id}', '${student.name}', ${student.age}, '${student.course}', ${student.year})">Atualizar</button>
      `;
    studentsDiv.appendChild(div);
  });
}

// Função para mostrar o formulário de atualização
function showUpdateForm(id, name, age, course, year) {
  document.getElementById("updateId").value = id;
  document.getElementById("updateName").value = name;
  document.getElementById("updateAge").value = age;
  document.getElementById("updateCourse").value = course;
  document.getElementById("updateYear").value = year;
}

// Função para adicionar um novo student
// Função para adicionar um novo student
async function addStudent() {
  const name = document.getElementById("newName").value;
  const age = parseInt(document.getElementById("newAge").value);
  const course = document.getElementById("newCourse").value;
  const year = parseInt(document.getElementById("newYear").value);

  // Primeiro, busca todos os estudantes para encontrar o maior ID
  const response = await fetch(apiUrl);
  const students = await response.json();

  // Obtém o maior ID existente
  const highestId = students.reduce(
    (max, student) => Math.max(max, parseInt(student.id)),
    0
  );

  // Define o novo ID como o maior ID + 1
  const newId = (highestId + 1).toString();

  // Envia a solicitação para adicionar o novo estudante
  const addResponse = await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: newId, // Usa o novo ID sequencial
      name,
      age,
      course,
      year,
    }),
  });

  if (addResponse.ok) {
    fetchStudents(); // Atualiza a lista de estudantes
  }

  // Limpa os campos de entrada
  document.getElementById("newName").value = ""; // Limpa o campo de Nome
  document.getElementById("newAge").value = ""; // Limpa o campo de Idade
  document.getElementById("newCourse").value = ""; // Limpa o campo de Curso
  document.getElementById("newYear").value = ""; // Limpa o campo de Ano
}

// Função para atualizar um estudante
async function updateStudent() {
  const id = document.getElementById("updateId").value;
  const name = document.getElementById("updateName").value;
  const age = parseInt(document.getElementById("updateAge").value);
  const course = document.getElementById("updateCourse").value;
  const year = parseInt(document.getElementById("updateYear").value);

  await fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, age, course, year }),
  });

  fetchStudents(); // Atualiza a lista após a atualização
  // Limpa os campos de entrada
  document.getElementById("updateId").value = ""; // Limpa o campo de ID
  document.getElementById("updateName").value = ""; // Limpa o campo de Nome
  document.getElementById("updateAge").value = ""; // Limpa o campo de Idade
  document.getElementById("updateCourse").value = ""; // Limpa o campo de Curso
  document.getElementById("updateYear").value = ""; // Limpa o campo de Ano
}

// Função para deletar um student
async function deleteStudent(id) {
  await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
  fetchStudents();
}

// Carregar a lista de students ao carregar a página
fetchStudents();
