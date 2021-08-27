const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

connection.query('CREATE TABLE people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))')

app.get('/', (req, res) => {
  
  connection.query(`INSERT INTO people (name) VALUES ('Rubens')`)

  connection.query(`SELECT name FROM people`, (error, results, fields) => {
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ol>
        ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
      </ol>
    `)
  })
})
app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})