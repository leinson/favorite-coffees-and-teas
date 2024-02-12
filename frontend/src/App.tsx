import { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import { DrinkForm } from "./components/DrinkForm"
import { FavoriteDrinks } from "./components/FavoriteDrinks"

interface DrinkFormInput {
  drink: string
  name: string
  weight: string
  price: string
  roast: string
}

function App() {
  const [favorites, setFavorites] = useState<Array<object> | null>(null)
  const [drinkFormData, setDrinkFormData] = useState<DrinkFormInput>({
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
      id: Math.floor(Math.random() * 100000),
      drink: drinkFormData.drink,
      name: drinkFormData.name,
      weight: drinkFormData.weight,
      price: drinkFormData.price,
      roast: drinkFormData.roast,
    }
    axios
      .post(`${url}/api`, drinkObject)
      .then((response) => {
        console.log("response", response)
        if (favorites) {
          setFavorites(favorites.concat(response.data))
        } else {
          setFavorites([response.data])
        }
        console.log("favoritess", favorites)
        setDrinkFormData({
          drink: "",
          name: "",
          weight: "",
          price: "",
          roast: "",
        })
      })
      .catch((error) => {
        console.log("error handling needed. Error:", error.response.data.error)
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
        <DrinkForm
          drinkFormData={drinkFormData}
          handleDrinkChoiceChange={handleDrinkChoiceChange}
          handleRoastChoiceChange={handleRoastChoiceChange}
          handleTextChange={handleTextChange}
          addDrink={addDrink}
        />

        {!favorites ? "No favorites yet" : <FavoriteDrinks favorites={favorites} />}
      </div>
    </>
  )
}

export default App
