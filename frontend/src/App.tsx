import { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"

interface DrinkFormProps {
  drink: string
  name: string
  weight: string
  price: string
  roast: string
}

function App() {
  const [favorites, setFavorites] = useState<Array<object> | null>(null)
  const [drinkFormData, setDrinkFormData] = useState<DrinkFormProps>({
    drink: "",
    name: "",
    weight: "",
    price: "",
    roast: "",
  })

  const url = "http://localhost:3001"

  console.log("fav", favorites)

  useEffect(() => {
    console.log("effect")
    axios.get(`${url}/api`).then((response) => {
      console.log("promise fulfilled")
      setFavorites(response.data)
    })
  }, [])

  const addDrink = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const drinkObject = {
      drink: drinkFormData.drink,
      name: drinkFormData.name,
      weight: drinkFormData.weight,
      price: drinkFormData.price,
      roast: drinkFormData.roast,
    }
    axios.post(`${url}/api`, drinkObject).then((response) => {
      setFavorites(favorites.concat(response.data))
      setDrinkFormData({
        drink: "",
        name: "",
        weight: "",
        price: "",
        roast: "",
      })
    })
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    console.log("hi", id, value)
    setDrinkFormData({ ...drinkFormData, [id]: value })
  }
  const handleDrinkChoiceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target
    console.log("hi", value)
    setDrinkFormData({ ...drinkFormData, ["drink"]: value })
  }
  const handleRoastChoiceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target
    console.log("hi", value)
    setDrinkFormData({ ...drinkFormData, ["roast"]: value })
  }

  return (
    <>
      <h1>My favorite coffees and teas</h1>
      <div className="card">
        <form onSubmit={addDrink}>
          <input
            type="radio"
            id="drinkTea"
            value="Tea"
            checked={drinkFormData.drink === "Tea"}
            onChange={handleDrinkChoiceChange}
          />
          <label htmlFor="drinkTea">Tea</label>
          <input
            type="radio"
            id="drinkCoffee"
            value="Coffee"
            checked={drinkFormData.drink === "Coffee"}
            onChange={handleDrinkChoiceChange}
          />
          <label htmlFor="drinkCoffee">Coffee</label>
          <br />
          <input
            id="name"
            value={drinkFormData.name}
            onChange={handleTextChange}
          />
          <br />
          <input
            id="weight"
            value={drinkFormData.weight}
            onChange={handleTextChange}
          />
          <br />
          <input
            id="price"
            value={drinkFormData.price}
            onChange={handleTextChange}
          />
          <br />
          <input
            type="radio"
            id="lightRoast"
            value="Light roast"
            checked={drinkFormData.roast === "Light roast"}
            onChange={handleRoastChoiceChange}
          />
          <label htmlFor="lightRoast">Light roast</label>
          <br />
          <input
            type="radio"
            id="darkRoast"
            value="Dark roast"
            checked={drinkFormData.roast === "Dark roast"}
            onChange={handleRoastChoiceChange}
          />
          <label htmlFor="darkRoast">Dark roast</label>
          <br />
          <button type="submit">add</button>
        </form>
        <p>
          {!favorites
            ? "Loading..."
            : favorites[0].name +
              ", " +
              favorites[0].weight +
              ", " +
              favorites[0].price +
              ", " +
              favorites[0].roast}
        </p>
      </div>
    </>
  )
}

export default App
