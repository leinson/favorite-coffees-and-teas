import { Button, Card, CardContent, Typography } from "@mui/material"

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
    <Card>
      <CardContent>
        
        <form onSubmit={addDrink}>
          <Typography>
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
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={drinkFormData.name}
            onChange={handleTextChange}
          />
          <br />
          <label htmlFor="weight">Weight</label>
          <input
            id="weight"
            value={drinkFormData.weight}
            onChange={handleTextChange}
          />
          <br />
          <label htmlFor="price">Price</label>
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
            id="mediumRoast"
            value="Medium roast"
            checked={drinkFormData.roast === "Medium roast"}
            onChange={handleRoastChoiceChange}
          />
          <label htmlFor="mediumRoast">Medium roast</label>
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
          <input
            type="radio"
            id="espressoRoast"
            value="Espresso roast"
            checked={drinkFormData.roast === "Espresso roast"}
            onChange={handleRoastChoiceChange}
          />
          <label htmlFor="espressoRoast">Espresso roast</label>
          <br />
          <input
            type="radio"
            id="frenchRoast"
            value="Fremch roast"
            checked={drinkFormData.roast === "French roast"}
            onChange={handleRoastChoiceChange}
          />
          <label htmlFor="frenchRoast">French roast</label>
          <br />
          <Button type="submit" color="secondary" variant="contained">
            Add
          </Button>
          </Typography>
        </form>
      </CardContent>
    </Card>
  )
}
