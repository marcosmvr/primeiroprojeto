import { Request, Response } from "express"
import path from "path"
import dotenv from "dotenv"


var express: any = express
const app: any & Express.Application = express()


app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req: Request, res: Response) => {
  res.sendFile(__dirname + "/views/index.html")
})


app.get("/typescript  ", (req: Request, res: Response) => {
  res.send("Sobre")
})


app.get("/contato", (req: Request, res: Response) => {
  res.send("Contato")
})


console.log(process.env.NODE_ENV)
console.log("Hello world")


app.listen(3000, () => console.log("Servidor rodando na porta 3000"))

