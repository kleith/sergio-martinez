import { ThemeProvider } from "styled-components"

import { Normalize } from "./config/styles"
import { defaultTheme } from "./config/theme"
import { Index } from "./pages/Index"

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Normalize />
        {/* Pages */}
        <Index />
      </ThemeProvider>
    </>
  )
}

export default App
