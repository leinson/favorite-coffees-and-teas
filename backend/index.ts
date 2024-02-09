import express, { Request, Response } from "express"
const app = express()
const cors = require('cors')

app.use(cors())

let favorites = [
  {
    id: 1,
    drinkType: "coffee",
    name: "Kharisma",
    grams: "200g",
    price: "3€",
    roast: "Dark roast",
  },
]

app.get("/api", (req: Request, res: Response) => {
  res.json(favorites)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
