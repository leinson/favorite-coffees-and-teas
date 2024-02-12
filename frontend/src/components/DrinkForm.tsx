interface DrinkFormProps {
  drinkFormData: DrinkFormInput
  handleDrinkChoiceChange: React.ChangeEventHandler<HTMLInputElement>
  handleRoastChoiceChange: React.ChangeEventHandler<HTMLInputElement>
  handleTextChange: React.ChangeEventHandler<HTMLInputElement>
  addDrink: React.FormEventHandler<HTMLFormElement>
}
interface DrinkFormInput {
  drink: string
  name: string
  weight: string
  price: string
  roast: string
}

export const DrinkForm: React.FC<DrinkFormProps> = ({
  drinkFormData,
  handleDrinkChoiceChange,
  handleRoastChoiceChange,
  handleTextChange,
  addDrink,
}) => {
  return (
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
      <input id="name" value={drinkFormData.name} onChange={handleTextChange} />
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
  )
}
