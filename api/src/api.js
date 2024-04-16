import express from 'express';
import cors from 'cors';
import todos from './todos.js';

const api = express();
const PORT = 5000;

api.use(express.json());
api.use(cors());




api.get('/test', (req, res, next) => {
  res.json({message: "Hello World!"})
})

api.get('/todos', (req, res, next) => {
  console.log("HIT /todos");
  let data = JSON.stringify(todos);
  res.json(data);
  next();
})

api.listen(PORT, (next) => {
  console.log(`API Server listening on localhost:${PORT}`);
})