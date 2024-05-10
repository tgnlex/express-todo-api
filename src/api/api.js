import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';
import {todos} from './src/todos.js';
import fs from 'fs'
const api = express();
const PORT = 5000;

api.use(express.json());
api.use(cors());
api.use(bodyParser.urlencoded({
  extended: true
}))




api.get('/test', (req, res, next) => {
  res.json({message: "Hello World!"})
})

api.get('/todos', (req, res, next) => {
  console.log("HIT /todos");
  const data = JSON.stringify(todos);
  res.json(data);
  next();
})

api.post('/todos/new', (req, res, next) => {
  console.log('HIT todos/new');
  let newId = todos.length + 1;
  let newTitle = req.body.title;
  let newDesc = req.body.desc;
  todos.push({
    id: newId,
    title: newTitle, 
    desc: newDesc,
  });

})

api.listen(PORT, (next) => {
  console.log(`API Server listening on localhost:${PORT}`);
})