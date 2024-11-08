# API de Gestão de Estudantes

## Descrição

Esta aplicação é uma API RESTful desenvolvida para a gestão de estudantes.

Foi construída usando **Node.js**, **Express** e **lowDB** para simular um banco de dados persistente.
A aplicação permite realizar operações CRUD (Create, Read, Update, Delete) para uma entidade "Estudante".

A API está implementada na plataforma [Render.com](https://restful-api-2bex.onrender.com/) e inclui uma interface de demonstração em HTML, CSS e JavaScript para interação direta com as rotas.

## Como Executar a Aplicação

Para executar a aplicação, siga os passos abaixo:

1. **Clone o repositório:**

   ```sh
   git clone <https://github.com/joseneves23/restful-api>
   cd <restful-api>
   ```

2. **Instale as dependências**:

   `npm install`

3. **Inicie a aplicação:**:

   `npm start`

4. **Acesse a aplicação:**:
   Abra o navegador e vá para:

   `http://localhost:3000`

   para acessar a interface de demonstração.

Certifique-se de ter o `Node.js` e o `npm` instalados na sua máquina antes de seguir os passos acima.

## Autoria

- Desenvolvido por: **[José Neves]**
- Email: **[jose.neves@ipvc.pt]**
- GitHub: [Link para o Repositório](https://github.com/joseneves23/restful-api)

## Estrutura de Dados

A entidade gerida pela API é "Estudantes", e cada estudante possui os seguintes atributos:

- **ID**: Identificador único do estudante (string)
- **Name**: Nome do estudante (string)
- **Age**: Idade do estudante (number)
- **Course**: Curso do estudante (string)
- **Year**: Ano em que o estudante está (number)

Exemplo de um objeto `Estudante`:

```json
{
  "id": "1",
  "name": "João",
  "age": 20,
  "course": "Engenharia",
  "year": 2
}
```

## Rotas Implementadas

Abaixo estão todas as rotas principais da API:

- **GET** `/students`: Lista todos os estudantes
- **GET** `/students/:id`: Retorna um estudante específico com base no ID
- **POST** `/students`: Adiciona um novo estudante
- **PUT** `/students/:id`: Atualiza um estudante específico
- **DELETE** `/students/:id`: Remove um estudante específico

## Demonstração da Interface

A aplicação inclui uma interface de demonstração que permite interagir com a API de forma intuitiva, testando todas as operações CRUD.
A interface está disponível no endpoint raiz (/) e inclui as seguintes páginas:

- **/** - Página de demonstração da API, onde poderá listar, adicionar, atualizar e remover estudantes.

- **/about** - Página com informações sobre o autor.

- **/doc** - Documentação da API.
