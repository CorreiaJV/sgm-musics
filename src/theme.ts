import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Exo 2', sans-serif`,
    body: `'Exo 2', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        bg: "black",
        color: "yellow.300",
      },
    },
  },
  colors: {
    brand: {
      500: "#fadb5f", 
    },
  },
})

export default theme
