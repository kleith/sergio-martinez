import { useTranslation } from "react-i18next"

import { Fullaname, Image, MeContainer, Work } from "./Me.styles"

export const Me = () => {
  const { t } = useTranslation()

  return (
    <MeContainer>
      <Image src='/sergio_martinez.jpg' title='Sergio Martínez' />
      <Fullaname>Sergio Martínez</Fullaname>
      <Work>{t("web_developer")}</Work>
    </MeContainer>
  )
}
