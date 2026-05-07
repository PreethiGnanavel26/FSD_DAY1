const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/name', (req, res) => {
  res.send('My name is Preethi G.')
})

app.get('/regno', (req, res) => {
  res.send('My Register Number is 23AI049.')
})

app.get('/food', (req, res) => {
  res.send('My Favorite food is Food.')
})

app.get('/color', (req, res) => {
  res.send('My Favorite is Green.')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
