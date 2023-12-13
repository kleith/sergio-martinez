import { I18nextProvider } from "react-i18next"
import { ThemeProvider } from "styled-components"

import i18n from "./config/i18n"
import { Normalize } from "./config/styles"
import { defaultTheme } from "./config/theme"
import { Container } from "./App.styles"
import { CurriculumVitae } from "./pages/CurriculumVitae"
import "./App.css"

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <I18nextProvider i18n={i18n}>
          <Normalize />
          <Container>
            {/* Pages */}
            <CurriculumVitae />
          </Container>
        </I18nextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
