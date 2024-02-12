import express, { Request, Response } from "express"
const app = express()
const cors = require("cors")

app.use(cors())
app.use(express.json())

//placeholder already saved drink
let favorites = [
  {
    id: 1,
    drink: "coffee",
    name: "Example coffee",
    weight: "200g",
    price: "3€",
    roast: "Dark roast",
  },
]

app.get("/api", (req: Request, res: Response) => {
  res.json(favorites)
})

app.post("/api", (req: Request, res: Response) => {
  const drink = req.body
  console.log("TODO, save the drink to db or file:", drink)
  res.json(drink)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
