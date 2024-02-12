import { createTheme, responsiveFontSizes } from "@mui/material"

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: "#9E6F50", contrastText: "#FFFFFF" },
      secondary: { main: "#263E4C", contrastText: "#FFFFFF" },
      background: { default: "#8AB2C7", paper: "#9E6F50" },
    },
    typography: {
      allVariants: {
        color: "white",
      },
      h1: {
        fontWeight: "bold",
        fontSize: "3rem",
      },
      h2: {
        fontWeight: "bold",
        fontSize: "2rem",
      },
      button: {
        fontWeight: 700,
        letterSpacing: 1,
      },
    },
  })
)

export default theme
