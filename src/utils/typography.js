import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"


kirkhamTheme.overrideThemeStyles = () => ({
  body: {
    color: "white",
    },
  h1: {
    color: "white",
    },
  h2: {
    color: "white",
   },
})

const typography = new Typography(kirkhamTheme)

export default typography

