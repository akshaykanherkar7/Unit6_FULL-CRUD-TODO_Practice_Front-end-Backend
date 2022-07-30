const express = require("express");
const productController = express.Router();
const fs = require("fs");

const dbjsonData = fs.readFileSync(`${__dirname}/db.json`, "utf-8");

let todosArray = JSON.parse(dbjsonData);
// console.log("todosArray:", todosArray);

productController.get("/", (req, res) => {
  let todos = todosArray.todos;
  res.send(todos);
});

productController.post("/", (req, res) => {
  let todo = req.body;
  todosArray.todos.push(todo);
  fs.writeFileSync(`${__dirname}/db.json`, JSON.stringify(todosArray), "utf-8");
  res.send("todo posted successfully");
});

productController.patch("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let { status } = req.body;
  let newTodosData = todosArray.todos.map((el) => {
    if (el.id === id) {
      return { ...el, status: status };
    } else {
      return el;
    }
  });
  todosArray.todos = newTodosData;
  fs.writeFileSync(`${__dirname}/db.json`, JSON.stringify(todosArray), "utf-8");
  res.send("todos status updates successfully");
});

productController.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  const newTodosData = todosArray.todos.filter((el) => el.id !== id);
  todosArray.todos = newTodosData;
  fs.writeFileSync(`${__dirname}/db.json`, JSON.stringify(todosArray), "utf-8");
  res.sendStatus(202);
});

productController.put("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  const todo = req.body;
  const newTodosData = todosArray.todos.map((el) => {
    if (el.id === id) {
      return { ...todo };
    } else {
      return el;
    }
  });
  todosArray.todos = newTodosData;
  fs.writeFileSync(`${__dirname}/db.json`, JSON.stringify(todosArray), "utf-8");
  res.send("todos edited successfully");
});

module.exports = productController;
