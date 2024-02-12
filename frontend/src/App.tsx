import { useState, useEffect } from "react"
import axios from "axios"
import { DrinkForm } from "./components/DrinkForm"
import { FavoriteDrinks } from "./components/FavoriteDrinks"
import { ThemeProvider } from "@emotion/react"
import { CssBaseline, Stack, Typography } from "@mui/material"
import theme from "./theme"
import { Background } from "./components/Background"

interface DrinkFormInput {
  drink: string
  name: string
  weight: string
  price: string
  roast: string
}

function App() {
  const url = "http://localhost:3001"
  const [favorites, setFavorites] = useState<Array<object> | null>(null)
  const [drinkFormData, setDrinkFormData] = useState<DrinkFormInput>({
    drink: "",
    name: "",
    weight: "",
    price: "",
    roast: "",
  })

  useEffect(() => {
    axios.get(`${url}/api`).then((response) => {
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
        if (favorites) {
          setFavorites(favorites.concat(response.data))
        } else {
          setFavorites([response.data])
        }
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
    setDrinkFormData({ ...drinkFormData, [id]: value })
  }
  const handleDrinkChoiceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target
    setDrinkFormData({ ...drinkFormData, ["drink"]: value })
  }
  const handleRoastChoiceChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target
    setDrinkFormData({ ...drinkFormData, ["roast"]: value })
  }

  return (
    <ThemeProvider theme={theme}>
      <Background />
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="flex-end"
        alignItems="flex-start"
        margin={5}
        padding={{ md: 4 }}
        spacing={3}
      >
        <Typography variant="h1" sx={{ paddingBottom: 5, paddingTop: 40 }}>
          My favorite coffee and tea
        </Typography>
    <Stack direction="row" spacing={10}>
        <DrinkForm
          drinkFormData={drinkFormData}
          handleDrinkChoiceChange={handleDrinkChoiceChange}
          handleRoastChoiceChange={handleRoastChoiceChange}
          handleTextChange={handleTextChange}
          addDrink={addDrink}
        />
        
        {!favorites ? (
          "No favorites yet"
        ) : (
          <FavoriteDrinks favorites={favorites} />
        )}
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export default App
