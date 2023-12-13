import { useCurriculumVitae } from "../../hooks/useCurriculumVitae"
import { Button, LanguageContainer } from "./Language.styles"

export const Language = () => {
  const { handleEnglish, handleSpanish } = useCurriculumVitae()

  return (
    <LanguageContainer>
      <Button onClick={handleSpanish}>Español</Button>
      <Button onClick={handleEnglish}>English</Button>
    </LanguageContainer>
  )
}
