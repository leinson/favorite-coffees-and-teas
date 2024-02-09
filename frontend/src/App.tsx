import { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"

function App() {
  const [favorites, setFavorites] = useState<object | null>(null)
  const url = "http://localhost:3001"
  console.log("fav", favorites)

  useEffect(() => {
    console.log("effect")
    axios.get(`${url}/api`).then((response) => {
      console.log("promise fulfilled")
      setFavorites(response.data)
    })
  }, [])

  return (
    <>
      <h1>My favorite coffees and teas</h1>
      <div className="card">
        <p>
          {!favorites
            ? "Loading..."
            : favorites[0].name + ", " + favorites[0].grams + ", " + favorites[0].price+ ", " + favorites[0].roast}
        </p>
      </div>
    </>
  )
}

export default App

// useEffect(() => {
//   fetch(`${url}/api`)
//   .then((res) => res.json())
//   .then((data) => setFavorites(data.message));
// }, [])
