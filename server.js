var express = require("express")
const path = require("path")
require("dotenv").config()

var app = express()

app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.get("/sobre", (req, res) => {
  res.send("Sobre")
})

app.get("/contato", (req, res) => {
  res.send("Contato")
})

console.log(process.env.NODE_ENV)
console.log("Hello world")

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))

