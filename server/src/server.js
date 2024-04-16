const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;
app.set("view engine", "ejs")

app.get('/', (req, res, next) => {

  res.render('index.ejs') 
   console.log("Hit");
});

app.get('/todo', (req, res, next) => {
  res.render('todo.ejs');
})

app.listen(PORT, () => {
  console.log(`Server Listening on http://localhost:${PORT}`)
  
})