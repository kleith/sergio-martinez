import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { ButtonContainer } from "./Button.styles"

type Props = {
  icon?: IconProp
  children: React.ReactNode
}

export const Button: React.FC<Props> = ({ icon, children }) => {
  return (
    <ButtonContainer>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </ButtonContainer>
  )
}
