import { Card, CardContent, Typography } from "@mui/material"

export const FavoriteDrinks = ({ favorites }) => {
  const favoritesList = favorites.map((drink) => (
    <li key={drink.id}>
      <Typography>
        {drink.name}
        <br /> {drink.weight} <br /> {drink.price} <br /> {drink.roast}
      </Typography>
    </li>
  ))
  return (
    <Card>
      <CardContent>
        <ul>{favoritesList}</ul>
      </CardContent>
    </Card>
  )
}
