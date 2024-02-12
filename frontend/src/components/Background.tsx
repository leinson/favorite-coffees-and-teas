import coffeeImage from "../assets/coffeeImage.jpg"
import { styled } from "@mui/system"

export const Background = styled("div")({
  position: "fixed",
  width: "100%",
  height: "50%",
  backgroundImage: `url(${coffeeImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  zIndex: -1,
})
