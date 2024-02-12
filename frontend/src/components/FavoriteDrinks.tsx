export const FavoriteDrinks= ({ favorites }) => {
  const favoritesList = favorites.map((drink) => (
    <li key={drink.id}>
      {drink.name}
      <br /> {drink.weight} <br /> {drink.price} <br /> {drink.roast}{" "}
    </li>
  ))
  return (
    <div>
      <h2>Favorites</h2>
      <ul>{favoritesList}</ul>
    </div>
  )
}
