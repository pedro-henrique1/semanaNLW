const express = require("express");
const app = express()

app.use(express.static("public"))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})
app.get('/creat-point.html', (req, res) => {
  res.sendFile(__dirname + "/views/creat-point.html")
})
app.get('/search-result.html', (req, res) => {
  res.sendFile(__dirname + "/views/search-result.html")
})



app.listen(3000)
