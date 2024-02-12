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
    <Card sx={{ padding: 3, borderRadius: 4 }}>
        <Typography variant="h2">Favorites</Typography>
      <CardContent>
        <ul>{favoritesList}</ul>
      </CardContent>
    </Card>
  )
}
