import { useTranslation } from "react-i18next"
// import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons"

import { useDocumentTitle } from "@hooks/useDocumentTitle"

import { Profile } from "./components/Profile/Profile"
import { Me } from "./components/Me"
import { Information } from "./components/Information"
import { useCurriculumVitae } from "./hooks/useCurriculumVitae"
import { Container, Content, ContentGrid, Detail, Header, Scroller } from "./CurriculumVitae.styles"
import "./CurriculumVitae.css"

export const CurriculumVitae = () => {
  const { t } = useTranslation()
  useDocumentTitle(t("sergio_martinez"))
  const { hasScroller, scrollWidth } = useCurriculumVitae()

  return (
    <>
      {hasScroller && <Scroller style={{ width: `${scrollWidth}%` }} />}
      <Container>
        <ContentGrid>
          <Header>
            <Me />
          </Header>
          <Detail>
            <Information />
          </Detail>
          <Content>
            <Profile />
          </Content>
        </ContentGrid>
      </Container>
    </>
  )
}
